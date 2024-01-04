
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskContainer}>

            {/* Task Header */}

        <Text style={styles.header}>Today's Task</Text>


        <View>

        </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskContainer:{
    paddingTop:80,
    paddingHorizontal:20
  },
  header:{
    fontSize:24,
    fontWeight:"bold",
    color:"#000"
  },
});
