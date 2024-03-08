import React from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

const ToDoForm = ({ addTask }) =>{
    const [taskText, setTaskText] = React.useState('');
    
    return(  
     <View>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={setTaskText}
          value={taskText}
        />
        <Button
          title="Add Task"
          onPress={() => {
            addTask(taskText);
            setTaskText(''); 
          }}
        />
      </View>
    );
  };
const styles = StyleSheet.create({
    
    form: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 20, 
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20, 
    },
});
export default ToDoForm;