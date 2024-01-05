
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskContainer}>

            {/* Task Header */}

        <Text style={styles.header}>Today's Task</Text>


        <View style={styles.item}>
            <Task text= "todo-1"/>
            <Task text= "todo-1"/>
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
  item:{
    marginTop:10
  },
  taskContainer:{
    paddingTop:80,
    paddingHorizontal:20,
    marginTop:10
  },
  header:{
    fontSize:24,
    fontWeight:"bold",
    color:"#000"
  },
});
