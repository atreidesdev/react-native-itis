import Realm from 'realm';
import { makeAutoObservable, runInAction } from 'mobx';
import { RealmClient } from './RealmClient';

export const TodoTable = 'Todo';
export type TodoStatus = 'выполняется' | 'выполнено';

class Todo {
    id!: number;
    title!: string;
    status!: TodoStatus;
    createdAt!: Date;
    completedAt?: Date;

    static schema: Realm.ObjectSchema = {
        name: 'Todo',
        primaryKey: 'id',
        properties: {
            id: 'int',
            title: 'string',
            status: 'string',
            createdAt: 'date',
            completedAt: 'date?',
        },
    };
}

export class TodoStore {
    todos: Todo[] = [];
    private lastId: number = 0;

    constructor() {
        makeAutoObservable(this);
        this.loadTodos();
    }

    private loadTodos() {
        const todosFromDB = RealmClient.objects<Todo>(TodoTable);
        runInAction(() => {
            this.todos = Array.from(todosFromDB);
            if (this.todos.length > 0) {
                this.lastId = Math.max(...this.todos.map(todo => todo.id));
            }
        });
    }

    private createTodo(title: string): Partial<Todo> {
        return {
            id: (this.lastId += 1),
            title,
            status: 'выполняется' as TodoStatus,
            createdAt: new Date(),
        };
    }

    addTodo(title: string) {
        const newTodo = this.createTodo(title);
        RealmClient.write(() => {
            const todo = RealmClient.create(TodoTable, newTodo) as Todo;
            runInAction(() => {
                this.todos.push(todo);
            });
        });
    }

    editTodo(id: number, newTitle: string) {
        RealmClient.write(() => {
            const targetTodo = RealmClient.objectForPrimaryKey(TodoTable, id) as Todo;
            if (targetTodo) {
                targetTodo.title = newTitle;
                runInAction(() => {
                    const index = this.todos.findIndex(todo => todo.id === id);
                    if (index !== -1) {
                        this.todos[index] = targetTodo;
                    }
                });
            }
        });
    }

    deleteTodo(id: number) {
        RealmClient.write(() => {
            const todoToDelete = RealmClient.objectForPrimaryKey(TodoTable, id);
            if (todoToDelete) {
                runInAction(() => {
                    this.todos = this.todos.filter(existingTodo => existingTodo.id !== id);
                });

                RealmClient.delete(todoToDelete);
            }
        });
    }

    toggleTodo(id: number) {
        RealmClient.write(() => {
            const targetTodo = RealmClient.objectForPrimaryKey(TodoTable, id) as Todo;
            if (targetTodo) {
                targetTodo.status = targetTodo.status === 'выполняется' ? 'выполнено' : 'выполняется';
                targetTodo.completedAt = targetTodo.status === 'выполнено' ? new Date() : undefined;
                runInAction(() => {
                    const index = this.todos.findIndex(todo => todo.id === id);
                    if (index !== -1) {
                        this.todos[index] = targetTodo;
                    }
                });
            }
        });
    }

    get pendingTodos() {
        return this.todos.filter(todo => todo.status === 'выполняется');
    }

    get completedTodos() {
        return this.todos.filter(todo => todo.status === 'выполнено');
    }
}

export const todoStore = new TodoStore();
