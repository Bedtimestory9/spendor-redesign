import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import color from '../colors/color';

type props = {
  children: ReactNode;
  style?: StyleProp<TextStyle> | undefined;
};

export default function DefaultText({ children, style }: props) {
  return <Text style={[styles.fontStyle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  fontStyle: {
    color: color.primaryBlack,
    fontFamily: 'sf-ui-display-medium',
  },
});
