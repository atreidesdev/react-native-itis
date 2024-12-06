import React from 'react';
import { FlatList, View } from 'react-native';
import { observer } from 'mobx-react';
import { todoStore } from '../store/TodoStore.ts';
import { Todo } from '../components/Todo.tsx';


export const CompletedTodoScreen = observer(() => {
    const completedTodos = todoStore.completedTodos;

    return (
        <View>
            <FlatList
                data={completedTodos}
                renderItem={({ item }) => <Todo {...item} />}
            />
        </View>
    );
});
