import { makeAutoObservable } from 'mobx';
import { AnimeType } from './types.ts';
import { RootStore } from '../../../app/store.ts';

export class AnimeStore {
    rootStore: RootStore;
    anime: AnimeType | null = {
        id: 56243,
        name: 'Jujutsu Kaisen 2nd Season',
        score: '8.8',
        status: 'released',
        released_on: '2023-12-28',
        image: {
            original: '/system/animes/original/51009.jpg?1711334733',
            preview: '/system/animes/preview/51009.jpg?1711334733',
        },
        genres: [
            {
                id: 1,
                russian: 'Экшен',
            },
            {
                id: 10,
                russian: 'Фэнтези',
            },
            {
                id: 23,
                russian: 'Школа',
            },
            {
                id: 27,
                russian: 'Сёнен',
            },
        ],
        description:
            'Тридцать первое октября 2018 года, район Сибуя. Множество простых людей заключены под магической завесой и взяты в заложники союзом проклятых духов под началом [character=164481]Махито[/character] и [character=175542]Гэто[/character]. Всех гражданских обещают выпустить невредимыми только с одним условием: сильнейший маг современности [character=164471]Сатору Годзё[/character] должен явиться в Сибую и принять бой.\nУченики и преподаватели Магического техникума разбиваются на группы, чтобы быстрее эвакуировать мирных жителей перед началом масштабной битвы. Вместе с тем, сам Сатору Годзё прибывает на место действия и отправляется прямиком к станции. События развиваются согласно плану Сугуру Гэто.',
    };

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    setAnime(anime: AnimeType) {
        this.anime = anime;
    }
}
