import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Canvas, Circle, Group } from '@shopify/react-native-skia';
import { generateUser } from '../lib/services/api';

export default function UserIcon() {
  const queryClient = useQueryClient();

  const [userIDToStore, setUserIDToStore] = useState('');
  const [hashedDeviceID, setHashedDeviceID] = useState('');
  // const [userIDToAuthenticate, setUserIDToAuthenticate] = useState("");
  const [userIDToGenerate, setUserIDToGenerate] = useState('');

  async function setHashedDeviceIDtoStore(hashedUniqueID: string) {
    await SecureStore.setItemAsync('hashed_unique_id', hashedUniqueID);
  }

  async function setNonUsertoStore() {
    await SecureStore.setItemAsync('userID', userIDToGenerate.toString());
  }

  async function getUserIDfromStore() {
    const stored = await SecureStore.getItemAsync('userID');

    if (typeof stored === 'string') {
      setUserIDToStore(stored);
    }
  }

  async function getHashedDeviceIDfromStore() {
    const stored = await SecureStore.getItemAsync('hashed_unique_id');

    if (typeof stored === 'string') {
      setHashedDeviceID(stored);
    }
  }

  // async function setAuthUsertoStore() {
  //   await SecureStore.setItemAsync("userID", userIDToAuthenticate.toString());
  // }

  // const authenticate = useMutation({
  //   mutationFn: postAuth,
  //   onSuccess: (data) => {
  //     if (data.user?.id !== undefined) {
  //       setUserIDToAuthenticate(data.user.id.toString());
  //     }
  //     ToastAndroid.show(data?.message || "", ToastAndroid.SHORT);
  //     // setAuthModalShown(!authModalShown)
  //     queryClient.invalidateQueries({ queryKey: ["totalMonthly"] });
  //     queryClient.invalidateQueries({ queryKey: ["expenses"] });
  //   },
  //   onError: (error: any) => {
  //     ToastAndroid.show(`'Error: '${error.message}`, ToastAndroid.SHORT);
  //   },
  // });

  const generate = useMutation({
    mutationFn: generateUser,
    onSuccess: data => {
      if (data.user?.id !== undefined) {
        console.log('it goes through the generate mutation');
        setUserIDToGenerate(data.user.id.toString());
      }
      console.log(data?.message || '');
      queryClient.invalidateQueries({ queryKey: ['totalMonthly'] });
      queryClient.invalidateQueries({ queryKey: ['expenses'] });
    },
    onError: (error: any) => {
      ToastAndroid.show(`'Error: '${error.message}`, ToastAndroid.SHORT);
    },
  });

  useEffect(() => {
    getUserIDfromStore();
    console.log('userID set previously: ', userIDToStore);
    getHashedDeviceIDfromStore();
    console.log('Hashed deviceID stored previously: ', hashedDeviceID);

    // Handle when { authenticate } has successfully posted
    // if (userIDToAuthenticate) {
    //   // setAuthUsertoStore();
    //   getUserIDfromStore();
    // }

    // if there's no hashedDeviceID (usually it's app first installed), then hash it first
    // then it immediately generate local user
    // can't use the next if block because they are parallel and wouldn't sequentially run
    // and this uses :generate_non_user `else` condition
    if (!hashedDeviceID) {
      async function hashIt() {
        // getUniqueId is identical to getAndroidId() on Android, and DeviceUID in IOS
        const uniqueId = await DeviceInfo.getUniqueId();
        const hash = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA256,
          uniqueId,
        );
        setHashedDeviceIDtoStore(hash.toString());
        getHashedDeviceIDfromStore();
      }
      hashIt();
      if (hashedDeviceID) {
        generate.mutate({
          user: {
            email: `${hashedDeviceID}@email.com`,
            password: hashedDeviceID,
          },
        });
      }
    }

    // this uses the :generate_non_user `true` condition
    // to get the registered userID from backend
    if (hashedDeviceID && !userIDToStore) {
      console.log(
        "Since there's no userID, the hashed deviceID is: ",
        hashedDeviceID,
      );
      generate.mutate({
        user: {
          email: `${hashedDeviceID}@email.com`,
          password: hashedDeviceID,
        },
      });
    }
  }, [hashedDeviceID]);

  useEffect(() => {
    if (userIDToGenerate) {
      setNonUsertoStore();
      getUserIDfromStore();
    }
  }, [userIDToGenerate]);

  // type UserState = {
  //   userID: string;
  //   setUserID: (id: string) => void;
  //   setHashedDeviceID: (hash: string) => void;
  //   hashedDeviceID: string;
  // };

  // const useUserStore = create<UserState>((set) => ({
  //   userID: "",
  //   hashedDeviceID: "",
  //   setUserID: (id) => {
  //     set({ userID: id });
  //     SecureStore.setItemAsync("userID", id);
  //   },
  //   setHashedDeviceID: (hash) => {
  //     set({ hashedDeviceID: hash });
  //     SecureStore.setItemAsync("hashed_unique_id", hash);
  //   },
  // }));

  const width = 256;
  const height = 256;
  const r = width * 0.33;
  return (
    <Canvas style={{ width, height }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
}
