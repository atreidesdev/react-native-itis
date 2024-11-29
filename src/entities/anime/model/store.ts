import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable, runInAction} from 'mobx';
import {AnimeType} from './types.ts';

export class AnimeStore {
  anime: AnimeType | null = null;

  constructor() {
    makeAutoObservable(this);
    this.initAnime();
  }

  async initAnime() {
    try {
      const animeData = await AsyncStorage.getItem('last-anime');
      if (animeData) {
        const parsedAnime: AnimeType = JSON.parse(animeData);
        runInAction(() => {
          this.anime = parsedAnime;
        });
      }
    } catch (error) {
      console.error('Ошибка загрузки из хранилища:', error);
    }
  }
  setAnime(anime: AnimeType) {
    this.anime = anime;
    try {
      AsyncStorage.setItem('last-anime', JSON.stringify(anime));
    } catch (error) {
      console.error('Ошибка сохранения в хранилище:', error);
    }
  }
}
