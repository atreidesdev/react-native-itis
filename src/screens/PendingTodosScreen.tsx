import React, { useRef } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { todoStore } from '../store/TodoStore';
import { Todo } from '../components/Todo';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

export const PendingTodoScreen = observer(() => {
  const modalizeRef = useRef<Modalize>(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const closeModalIfNoCompleted = () => {
    if (todoStore.completedTodos.length === 0) {
      modalizeRef.current?.close();
    }
  };

  const completedTodos = todoStore.completedTodos || [];
  const pendingTodos = todoStore.pendingTodos || [];

  return (
    <FlatList
      ListHeaderComponent={
        <>
          {completedTodos.length > 0 && (
            <TouchableOpacity
              style={styles.openModalButton}
              onPress={openModal}
            >
              <Text style={styles.buttonText}>Посмотреть завершенные задачи</Text>
            </TouchableOpacity>
          )}
        </>
      }
      ListFooterComponent={
        <Portal>
          <Modalize
            ref={modalizeRef}
            disableScrollIfPossible={true}
            adjustToContentHeight={true}
          >
            <ScrollView contentContainerStyle={styles.modalContent}>
              {completedTodos.map((item) => (
                <Todo
                  key={item.id}
                  {...item}
                  onDelete={() => {
                    todoStore.deleteTodo(item.id);
                    closeModalIfNoCompleted();
                  }}
                />
              ))}
            </ScrollView>
          </Modalize>
        </Portal>
      }
      data={pendingTodos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Todo {...item} />}
      style={{ flex: 1, padding: 20 }}
    />
  );
});

const styles = StyleSheet.create({
  openModalButton: {
    backgroundColor: 'teal',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  modalContent: {
    padding: 20,
  },
});
