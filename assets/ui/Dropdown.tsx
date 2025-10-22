import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import color from '../colors/color';
import DefaultText from './DefaultText';

export type DataType = {
  id: number;
  name: string;
};

interface DropdownProps {
  placeholder: string;
  entries: DataType[];
  style?: StyleProp<TextStyle> | undefined;
}

export default function Dropdown({
  entries,
  placeholder,
  style,
}: DropdownProps) {
  const [triggered, setTriggered] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={style}
        onPress={() => setTriggered(prev => !prev)}
      >
        <DefaultText style={styles.placeholderText}>{placeholder}</DefaultText>
      </TouchableOpacity>
      {triggered && (
        <View style={styles.dropdownMenu}>
          {entries.map(e => (
            <DefaultText style={styles.dropdownText} key={e.name}>
              {e.name}
            </DefaultText>
          ))}
        </View>
      )}
    </View>
  );
}

// Setting container as 'relative', while setting the dropdownMenu to 'absolute' + 'top: 100%', create a simple dropdown

const styles = StyleSheet.create({
  container: {
    // Mandatory CSS:
    position: 'relative',
  },
  dropdownMenu: {
    // Mandatory CSS:
    position: 'absolute',
    top: '100%',
    alignItems: 'center',
    zIndex: 1,
    // Custom CSS:
    backgroundColor: color.bgColor,
    borderColor: color.fadedGrey,
    borderWidth: 1,
    width: '60%',
    alignSelf: 'center',
  },
  placeholderText: {
    fontSize: 20,
    color: color.visibleGrey,
  },
  dropdownText: {
    fontSize: 20,
  },
});
