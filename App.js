import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Platform, TextInput, Pressable, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = ()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskContainer}>

            {/* Task Header */}

        <Text style={styles.header}>Today's Task</Text>


        <View style={styles.item}>
            {
              taskItems.map((item, index)=>{
                return <Task key= {index} text={item}/>
              })
            }
        </View>
      </View>
      
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding': 'height'}
      style={styles.inputWrapper}
      >
        <TextInput placeholder='Write your task' style={styles.input} 
        value={task} onChangeText={(text)=>{setTask(text)}}/>
        <Pressable style={styles.btn} onPress={handleTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.add}>+</Text>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingHorizontal:20
  },
  item:{
    marginTop:10
  },
  taskContainer:{
    paddingTop:80,
    //paddingHorizontal:20,
    marginTop:10
  },
  header:{
    fontSize:24,
    fontWeight:"bold",
    color:"#000"
  },
  inputWrapper:{
    position:"absolute",
    bottom:60,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  input:{
    padding:15,
    width:250,
    backgroundColor:"white",
    borderRadius:50,
    borderColor:"#D3D3D3",
    borderWidth:1,
    width:250,
    marginLeft:20
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"white",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#D3D3D3"
  },
  add:{

  },
  btn:{
    //marginHorizontal:10
  }
});
