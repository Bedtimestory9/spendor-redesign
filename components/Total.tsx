import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../assets/colors/color';
import DefaultText from '../assets/ui/DefaultText';

type TotalProps = {
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Total({ setVisibility }: TotalProps) {
  return (
    <View style={[styles.totalContainer, styles.devBox]}>
      <DefaultText style={[styles.totalText, styles.devBox]}>$2500</DefaultText>
      <TouchableOpacity
        onPress={() => setVisibility(true)}
        style={[styles.addButton]}
      >
        <DefaultText style={[styles.addText, styles.devBox]}>+</DefaultText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  totalContainer: {
    marginTop: '15%',
    height: '15%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 60,
    color: color.primaryBlue,
  },
  addButton: {},
  addText: {
    fontSize: 50,
    fontWeight: '800',
  },
  devBox: {
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: '#C03E35',
  },
});
