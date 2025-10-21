import { StyleSheet, Text, View } from 'react-native';
import DefaultText from '../assets/ui/DefaultText';

export default function Expenses() {
  return (
    <View>
      <View style={styles.expensesTitle}>
        <DefaultText style={styles.titleText}>Today</DefaultText>
        <DefaultText>Oct. 13, 2025 ⯆</DefaultText>
      </View>
      <View style={styles.underline} />
      <View>
        <View style={styles.expenseEntry}>
          <DefaultText style={styles.entryText}>Meituan</DefaultText>
          <DefaultText style={styles.entryText}>-------------</DefaultText>
          <DefaultText style={styles.entryText}>$25</DefaultText>
        </View>
        <View style={styles.timeView}>
          <DefaultText style={styles.entryTime}>8:00</DefaultText>
        </View>

        {/* dummy data */}
        <View style={styles.expenseEntry}>
          <DefaultText style={styles.entryText}>Meituan</DefaultText>
          <DefaultText style={styles.entryText}>-------------</DefaultText>
          <DefaultText style={styles.entryText}>$25</DefaultText>
        </View>
        <View style={styles.timeView}>
          <DefaultText style={styles.entryTime}>8:00</DefaultText>
        </View>

        <View style={styles.expenseEntry}>
          <DefaultText style={styles.entryText}>Meituan</DefaultText>
          <DefaultText style={styles.entryText}>-------------</DefaultText>
          <DefaultText style={styles.entryText}>$25</DefaultText>
        </View>
        <View style={styles.timeView}>
          <DefaultText style={styles.entryTime}>8:00</DefaultText>
        </View>
      </View>

      <View style={styles.expenseEntry}>
        <DefaultText style={styles.entryText}>Meituan</DefaultText>
        <DefaultText style={styles.entryText}>-------------</DefaultText>
        <DefaultText style={styles.entryText}>$25</DefaultText>
      </View>
      <View style={styles.timeView}>
        <DefaultText style={styles.entryTime}>8:00</DefaultText>
      </View>

      {/* dummy data */}

      <View style={styles.expenseEntry}>
        <DefaultText style={styles.entryText}>Total</DefaultText>
        <DefaultText style={styles.entryText}>----------------</DefaultText>
        <DefaultText style={styles.entryText}>$25</DefaultText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  expensesTitle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    marginBottom: '1%',
  },
  underline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: '5%',
  },
  expenseEntry: {
    display: 'flex',
    flexDirection: 'row',
  },
  entryText: {
    fontSize: 30,
  },
  timeView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  entryTime: {
    fontSize: 15,
  },
});
