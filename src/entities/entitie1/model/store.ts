import {makeAutoObservable} from 'mobx';
import {Entity1Type} from './types.ts';
import {RootStore} from '../../../app/store.ts';

class Entitie1Store {
  rootStore: RootStore;
  entitie1: Entity1Type | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}

export default Entitie1Store;
