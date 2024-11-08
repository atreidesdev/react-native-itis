import { createContext, useContext } from 'react';
import { AnimeStore } from '../entities/anime/model/store.ts';

export class RootStore {
    animeStore: AnimeStore;

    constructor() {
        this.animeStore = new AnimeStore(this);
    }
}

export const store = new RootStore();
export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);
