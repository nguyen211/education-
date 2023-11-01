import { StyleSheet, View } from 'react-native';
import Login from './App/Pages/Login';

export default function App() {

  
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F6F8FC',
    
  },
});
