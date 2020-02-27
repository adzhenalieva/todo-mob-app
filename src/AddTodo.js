import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('');
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Please, enter text. Title can not be empty! ')
        }
    };

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Add new task'
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Button title='Add new' onPress={pressHandler}/>
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,

    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',

    }
});
