import { StatusBar, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Total from './components/Total';
import Categories from './components/Categories';
import color from './assets/colors/color';
import Expenses from './components/Expenses';
import AddExpense from './components/AddExpense';
import { useState } from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaProvider style={styles.appScreen}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Total setVisibility={setModalVisible} />
      <Categories />
      <Expenses />
      <AddExpense visibility={modalVisible} setVisibility={setModalVisible} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appScreen: {
    paddingHorizontal: '10%',
    backgroundColor: color.bgColor,
  },
});

export default App;
