import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { todoStore } from '../store/TodoStore.ts';

export const TodoInput = () => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleAddTodo = () => {
        if (todoTitle.trim()) {
            todoStore.addTodo(todoTitle);
            setTodoTitle('');
        }
    };

    return (
        <View>
            <TextInput
                onChangeText={setTodoTitle}
                value={todoTitle}
                placeholder="Введите название задачи"
            />
            <Button title="Добавить задачу" onPress={handleAddTodo} />
        </View>
    );
};
