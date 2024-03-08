import React from 'react';
import { View,ScrollView, Text, Pressable, StyleSheet } from 'react-native';
const ToDoList = ({tasks}) =>{
    return(
        <ScrollView style={styles.container}>
        {tasks.map((task, index) => (
            <Pressable key={index}>
                <View style={styles.task}>
                    <Text style={styles.taskText}>{task}</Text>
                </View>
            </Pressable>
        ))}
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    task: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    taskText: {
        fontSize: 20,
    },
    

});

export default ToDoList;