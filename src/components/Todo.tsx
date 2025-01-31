import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Alert, Button, Text, View, TextInput, Modal, StyleSheet } from 'react-native';
import { TodoStatus, todoStore } from '../store/TodoStore.ts';

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

type TodoType = {
  id: number;
  title: string;
  status: TodoStatus;
  createdAt: Date;
  completedAt?: Date;
};

export const Todo = observer((props: TodoType & { onDelete?: () => void }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState(props.title);

  const confirmDelete = () => {
    Alert.alert(
      'Удаление задачи',
      'Вы точно хотите удалить эту задачу?',
      [
        {
          text: 'Нет',
          style: 'cancel',
        },
        {
          text: 'Да',
          onPress: () => {
            if (props.onDelete) {
              props.onDelete();
            } else {
              todoStore.deleteTodo(props.id);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const openEditModal = () => {
    setNewTitle(props.title);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setModalVisible(false);
  };

  const handleEditSubmit = () => {
    todoStore.editTodo(props.id, newTitle);
    closeEditModal();
  };

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
      <Button title="Редактировать" onPress={openEditModal} />
      <Button title="Удалить задачу" onPress={confirmDelete} />

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            value={newTitle}
            onChangeText={setNewTitle}
            style={styles.input}
            placeholder="Введите новый заголовок"
          />
          <Button title="Сохранить" onPress={handleEditSubmit} />
          <Button title="Отмена" onPress={closeEditModal} />
        </View>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
