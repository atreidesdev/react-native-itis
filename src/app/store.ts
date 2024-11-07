import {createContext, useContext} from 'react';
import Entitie1Store from '../entities/entitie1/model/store.ts';
import Entitie2Store from '../entities/entitie2/model/store.ts';

export class RootStore {
  entitie1Store: Entitie1Store;
  entitie2Store: Entitie2Store;

  constructor() {
    this.entitie1Store = new Entitie1Store(this);
    this.entitie2Store = new Entitie2Store(this);
  }
}

export const store = new RootStore();
export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);
