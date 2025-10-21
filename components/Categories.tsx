import { StyleSheet, View } from 'react-native';
import ProgressBar from '../assets/ui/ProgressBar';
import DefaultText from '../assets/ui/DefaultText';

export default function Categories() {
  return (
    <View>
      <DefaultText style={styles.titleText}>Categories</DefaultText>
      <View style={styles.underline} />
      <View style={styles.progressBarView}>
        <ProgressBar percentage={'25%'} barText="Food" barNumber="25%" />
        <ProgressBar percentage={'15%'} barText="Utilities" barNumber="15%" />
        <ProgressBar percentage={'35%'} barText="Transport" barNumber="35%" />
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
  titleText: {
    fontSize: 30,
    marginBottom: '1%',
  },
  underline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: '5%',
  },
  progressBarView: {
    gap: '1%',
  },
});
