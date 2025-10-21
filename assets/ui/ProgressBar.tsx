import { DimensionValue, StyleSheet, View } from 'react-native';
import color from '../colors/color';
import DefaultText from './DefaultText';

type ProgressBarProps = {
  percentage: DimensionValue;
  barText?: string;
  barNumber?: string;
};

export default function ProgressBar({
  percentage,
  barText,
  barNumber,
}: ProgressBarProps) {
  return (
    <View style={styles.barContainer}>
      <View style={[styles.contentBehindProgress]}>
        <DefaultText style={styles.barText}>{barText}</DefaultText>
        <DefaultText style={styles.barText}>{barNumber}</DefaultText>
      </View>
      <View style={[styles.progress, { width: percentage }]}>
        <DefaultText style={styles.barTextOverlay}>{barText}</DefaultText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    width: '100%',
    height: 40,
  },
  barTextOverlay: {
    color: 'white',
    fontSize: 30,
  },
  barText: {
    fontSize: 30,
  },
  progress: {
    height: 40,
    backgroundColor: color.primaryBlue,
    position: 'absolute',
  },
  contentBehindProgress: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  devBox: {
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: color.primaryRed,
  },
});
