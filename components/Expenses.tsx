import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import DefaultText from '../assets/ui/DefaultText';
import color from '../assets/colors/color';
import { dummyData } from './dummyData';

type ExpensesProps = {
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Expenses({ setVisibility }: ExpensesProps) {
  function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <View>
      <View style={[styles.expensesTitle]}>
        <DefaultText style={styles.titleText}>Today</DefaultText>
        <TouchableOpacity
          onPress={() => setVisibility(true)}
          style={[styles.addButton]}
        >
          <DefaultText style={[styles.addText]}>+</DefaultText>
        </TouchableOpacity>
      </View>

      <View style={styles.underline} />

      <ScrollView style={styles.scrollview}>
        {dummyData.map(d => (
          <View key={d.id}>
            <View style={[styles.entryContainer]}>
              <View style={[styles.dashedLineContainer]}>
                <View style={styles.dashedLine} />
              </View>
              <View style={styles.expenseEntry}>
                <DefaultText style={styles.entryText}>
                  {capitalizeFirstLetter(d.name)}
                </DefaultText>
                <DefaultText style={styles.entryText}>{d.amount}</DefaultText>
              </View>
            </View>
            <View style={styles.timeView}>
              <DefaultText style={styles.entryTime}>8:00</DefaultText>
            </View>
          </View>
        ))}
      </ScrollView>
      <View>
        <View style={styles.underline} />
        <View style={[styles.totalEntry]}>
          <View style={[styles.dashedLineContainer]}>
            <View style={styles.dashedLine} />
          </View>
          <View style={styles.expenseEntry}>
            <DefaultText style={styles.totalText}>Total</DefaultText>
            <DefaultText style={styles.totalText}>$25</DefaultText>
          </View>
        </View>
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
  entryContainer: { position: 'relative', height: 40, width: '100%' },
  totalEntry: {
    position: 'relative',
    height: 40,
    width: '100%',
    marginTop: '2%',
  },
  dashedLineContainer: { justifyContent: 'center', height: '100%' },
  dashedLine: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    width: '100%',
    borderBottomColor: color.primaryBlue,
  },
  underline: {
    borderBottomColor: color.visibleGrey,
    borderBottomWidth: 1,
  },
  scrollview: {
    height: '35%',
    backgroundColor: color.barelyGrey,
  },
  expenseEntry: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    position: 'absolute',
    width: '100%',
  },
  entryText: {
    backgroundColor: color.barelyGrey,
    fontSize: 25,
  },
  totalText: {
    backgroundColor: color.bgColor,
    fontSize: 25,
  },
  timeView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  entryTime: {
    fontSize: 15,
    color: color.visibleGrey,
  },
  addButton: {},
  addText: {
    fontSize: 40,
    fontWeight: '800',
    color: color.primaryBlue,
  },
  devBox: {
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: '#C03E35',
  },
});
