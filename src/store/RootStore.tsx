import { createContext, ReactNode, useContext } from 'react';
import {todoStore, TodoStore} from './TodoStore';

interface RootStore {
  todoStore: TodoStore;
}

const rootStore: RootStore = {
  todoStore: todoStore,
};

const StoreContext = createContext<RootStore>(rootStore);

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
};
