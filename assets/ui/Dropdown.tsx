import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export type DataType = {
  id: number;
  name: string;
};

interface DropdownProps {
  entry: DataType[];
}

export default function Dropdown({ entry }: DropdownProps) {
  const [triggered, setTriggered] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setTriggered(true)}>
        <Text>{entry[0].name}</Text>
      </TouchableOpacity>
      {triggered && (
        <View style={styles.dropdownMenu}>
          {entry.map(e => (
            <Text>{e.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownMenu: {
    position: 'absolute',
  },
});
