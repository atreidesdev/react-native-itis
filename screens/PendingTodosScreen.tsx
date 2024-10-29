import React from 'react';
import { FlatList, View } from 'react-native';
import { observer } from 'mobx-react';
import { Todo } from '../components/Todo';
import { todoStore } from '../store/TodoStore.ts';

export const PendingTodoScreen = observer(() => {
    const pendingTodos = todoStore.pendingTodos;

    return (
        <View>
            <FlatList
                data={pendingTodos}
                renderItem={({ item }) => <Todo {...item} />}
            />
        </View>
    );
});
