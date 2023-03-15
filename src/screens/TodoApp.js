import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Task from '../../src/components/Task';

const TodoApp = () => {

  const [task, setTask] = useState();
  const [taskitems, setTaskItems] = useState([]);


  const handleAddTask = (text) => {

    Keyboard.dismiss;
    if(text && text.length >= 2) {
      setTaskItems([...taskitems, task]);
      setTask(null);
    }
    else{
      Alert.alert('Warning.!!', 'Please enter atleast 2 characters');
    }
  };


  const handleRemoveTask = (index) => {
    let itemscopy = [...taskitems];
    itemscopy.splice(index, 1);
    setTaskItems(itemscopy);
  };

  
  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectiionTitle}>Today's Task</Text>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.items}>
          {/* This is where the task will go */}
          {
          taskitems.map((item, index) => {
           return (
            <TouchableOpacity key={index}  onPress={() => handleRemoveTask(index)}>
           <Task text={item} />
           </TouchableOpacity>
           );
          })
           }
          
        </ScrollView>
      </View>
      {/* Write a Task */}
      <KeyboardAvoidingView
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} returnKeyType="send" value={task} placeholder={'Write a Task..'} onChangeText={text => setTask(text)} />

        <TouchableOpacity style={styles.addWrapper} onPress={() => handleAddTask(task)}>
        <View>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>  
        
      </KeyboardAvoidingView>
    </View>
  );
};

export default TodoApp;

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#E8EAED',
    height: height,
  },
  tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  sectiionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  items: {
    marginTop: 20,
    marginBottom: 148,
  },
   writeTaskWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,

  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#55BCF6',
    borderWidth: 1,
  },
  addText: {
    fontSize: 25,
    color: '#55BCF6',
  }
});
