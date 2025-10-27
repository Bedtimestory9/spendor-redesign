// import { create } from "zustand";
import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { ToastAndroid } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import * as Crypto from 'expo-crypto';
import { generateUser } from './api';

const queryClient = useQueryClient();

let userIDToStore: string;
let hashedDeviceID: string;
let userIDToGenerate: string;
// let userIDToAuthenticate: string

async function setHashedDeviceIDtoStore(hashedUniqueID: string) {
  await SecureStore.setItemAsync('hashed_unique_id', hashedUniqueID);
}

async function setNonUsertoStore() {
  await SecureStore.setItemAsync('userID', userIDToGenerate);
}

async function getUserIDfromStore() {
  const stored = await SecureStore.getItemAsync('userID');

  if (typeof stored === 'string') {
    userIDToStore = stored;
  }
}

async function getHashedDeviceIDfromStore() {
  const stored = await SecureStore.getItemAsync('hashed_unique_id');

  if (typeof stored === 'string') {
    hashedDeviceID = stored;
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
