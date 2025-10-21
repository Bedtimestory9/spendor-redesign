import {
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DefaultText from '../assets/ui/DefaultText';
import color from '../assets/colors/color';
import Dropdown from '../assets/ui/Dropdown';

import type { DataType } from '../assets/ui/Dropdown';

type AddExpenseProps = {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function AddExpense({
  visibility,
  setVisibility,
}: AddExpenseProps) {
  const categories: DataType[] = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Utilities' },
    { id: 3, name: 'Entertainment' },
    { id: 4, name: 'Shopping' },
    { id: 5, name: 'Transport' },
  ];

  return (
    <Modal
      presentationStyle="overFullScreen"
      transparent={true}
      animationType="fade"
      visible={visibility}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.contentContainer, styles.devBox]}>
          <View style={styles.content}>
            <View style={styles.inputView}>
              <DefaultText style={styles.dollarSign}>$</DefaultText>
              <TextInput style={styles.amount} value="0" />
            </View>
            <View style={styles.dateView}>
              <DefaultText>Oct. 13, 2025</DefaultText>
            </View>
            <View style={styles.dropdownView}>
              <Dropdown entry={categories} />
            </View>
            <TouchableOpacity onPress={() => setVisibility(false)}>
              <DefaultText>X</DefaultText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingHorizontal: '6%',
    paddingVertical: '10%',
    width: '100%',
    height: '60%',
  },
  content: {
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: '2%',
    borderColor: color.fadedGrey,
    backgroundColor: color.bgColor,
    height: '100%',
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dollarSign: {
    fontSize: 60,
    color: color.primaryBlue,
  },
  amount: {
    fontSize: 60,
    fontWeight: '800',
    color: color.primaryBlue,
    textDecorationLine: 'underline',
  },
  dateView: {
    alignItems: 'center',
  },
  dropdownView: {
    alignItems: 'center',
  },
  devBox: {
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: '#C03E35',
  },
});
