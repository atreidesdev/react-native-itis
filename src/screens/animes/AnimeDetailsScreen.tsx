import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { useStore } from '../../app/store.ts';
import { fetchAnimeWithDetails } from '../../entities/anime/model/api.ts';
import { AnimeType } from '../../entities/anime/model/types.ts';
import { Anime } from '../../entities/anime/ui/Anime.tsx';

type AnimeDetailsRouteProp = RouteProp<
    { AnimeDetails: { animeId: string } },
    'AnimeDetails'
>;

const AnimeDetailsScreen = () => {
    const { params } = useRoute<AnimeDetailsRouteProp>();
    const navigation = useNavigation();
    const { animeStore } = useStore();

    const { data, isLoading, isError, error } = useQuery<AnimeType, Error>({
        queryKey: ['animeDetails', params?.animeId],
        queryFn: () => fetchAnimeWithDetails(params?.animeId || ''),
    });

    useEffect(() => {
        if (data) {
            navigation.setOptions({ title: data.name });
            animeStore.setAnime(data);
        }
    }, [data, navigation, animeStore]);

    if (isLoading) {
        return <ActivityIndicator size="large" />;
    }

    if (isError) {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text>Error: {error?.message}</Text>
                </ScrollView>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    {data && (
                        <Anime
                            anime={data}
                            withDetails={true}
                            showTitle={false}
                        />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AnimeDetailsScreen;
