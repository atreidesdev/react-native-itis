import { observer } from 'mobx-react';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useStore } from '../../app/store';
import { Anime } from '../../entities/anime/ui/Anime';

export const LastAnimeScreen = observer(() => {
    const { animeStore } = useStore();
    const lastAnime = animeStore.anime;

    return (
        <SafeAreaView>
            <ScrollView>
                {lastAnime && <Anime anime={lastAnime} withDetails={true} />}
            </ScrollView>
        </SafeAreaView>
    );
});
