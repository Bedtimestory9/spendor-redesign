import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../assets/colors/color';
import DefaultText from '../assets/ui/DefaultText';

type TotalProps = {};

export default function Total({ setVisibility }: TotalProps) {
  return (
    <View style={[styles.totalContainer]}>
      <DefaultText style={[styles.totalText]}>$2500</DefaultText>
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
  devBox: {
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: '#C03E35',
  },
});
