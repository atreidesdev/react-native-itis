import React from 'react';
import { observer } from 'mobx-react';
import { Button, Text, View } from 'react-native';
import { TodoType, todoStore } from '../store/TodoStore.ts';

const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }).format(date);
};

export const Todo = observer((props: TodoType) => {
    return (
        <View>
            <Text>{props.title}</Text>
            <Text>{props.status}</Text>
            <Text>Дата создания: {formatDate(props.createdAt)}</Text>
            {props.completedAt && (
                <Text>Дата закрытия: {formatDate(props.completedAt)}</Text>
            )}
            <Button
                title={props.status === 'выполнено' ? 'Возобновить' : 'Завершить'}
                onPress={() => todoStore.toggleTodo(props.id)}
            />
            <Button
                title="Удалить задачу"
                onPress={() => todoStore.deleteTodo(props.id)}
            />
        </View>
    );
});
