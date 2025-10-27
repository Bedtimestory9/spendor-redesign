import { StyleSheet, View } from 'react-native';
import ProgressBar from '../assets/ui/ProgressBar';
import DefaultText from '../assets/ui/DefaultText';
import color from '../assets/colors/color';

export default function Categories() {
  return (
    <View style={[styles.categoriesContainer]}>
      <DefaultText style={styles.titleText}>September</DefaultText>
      <View style={styles.underline} />
      <View style={styles.progressBarView}>
        <ProgressBar percentage={'25%'} barText="Food" barNumber="25%" />
        <ProgressBar percentage={'15%'} barText="Utilities" barNumber="15%" />
        <ProgressBar percentage={'25%'} barText="Transport" barNumber="35%" />
        <ProgressBar
          percentage={'45%'}
          barText="Entertainment"
          barNumber="45%"
        />
        <ProgressBar percentage={'55%'} barText="Shopping" barNumber="55%" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    height: '30%',
  },
  titleText: {
    fontSize: 30,
    marginBottom: '1%',
  },
  underline: {
    borderBottomColor: color.visibleGrey,
    borderBottomWidth: 1,
    marginBottom: '3%',
  },
  progressBarView: {
    gap: '2%',
  },
  devBox: {
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: '#C03E35',
  },
});
