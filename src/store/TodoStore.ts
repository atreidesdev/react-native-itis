import { makeAutoObservable, runInAction } from 'mobx';

export type TodoStatus = 'выполняется' | 'выполнено';

export type TodoType = {
    id: number;
    title: string;
    status: TodoStatus;
    createdAt: Date;
    completedAt?: Date;
}

class TodoStore {
    todos: TodoType[] = [];
    private lastId: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    private createTodo(title: string): TodoType {
        this.lastId += 1;
        return {
            id: this.lastId,
            title,
            status: 'выполняется' as TodoStatus,
            createdAt: new Date(),
        };
    }

    addTodo(title: string) {
        const newTodo: TodoType = this.createTodo(title);
        runInAction(() => {
            this.todos.push(newTodo);
        });
    }

    deleteTodo(id: number) {
        runInAction(() => {
            this.todos = this.todos.filter(existingTodo => existingTodo.id !== id);
        });
    }

    toggleTodo(id: number) {
        const targetTodo = this.todos.find(existingTodo => existingTodo.id === id);
        if (targetTodo) {
            runInAction(() => {
                targetTodo.status = targetTodo.status === 'выполняется' ? 'выполнено' : 'выполняется';
                targetTodo.completedAt = targetTodo.status === 'выполнено' ? new Date() : undefined;
            });
        }
    }

    get pendingTodos() {
        return this.todos.filter(todo => todo.status === 'выполняется');
    }

    get completedTodos() {
        return this.todos.filter(todo => todo.status === 'выполнено');
    }
}

export const todoStore = new TodoStore();
