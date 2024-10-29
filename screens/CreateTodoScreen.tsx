import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { TodoInput } from '../components/TodoInput';

export const CreateTodoScreen = observer(() => {
    return (
        <View>
            <TodoInput />
        </View>
    );
});
