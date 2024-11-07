import {makeAutoObservable} from 'mobx';
import {Entity2Type} from './types.ts';
import {RootStore} from '../../../app/store.ts';

class Entitie2Store {
  rootStore: RootStore;
  entitie2: Entity2Type | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}

export default Entitie2Store;
