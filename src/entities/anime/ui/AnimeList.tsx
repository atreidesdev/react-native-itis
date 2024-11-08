import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useCallback } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Anime } from './Anime';
import { AnimeStackParamList } from '../../../screens/animes/AnimeStack.tsx';
import { fetchAnimes } from '../model/api.ts';
import { AnimeType } from '../model/types';

const AnimeList = () => {
    const navigation = useNavigation<NavigationProp<AnimeStackParamList>>();

    const {
        data,
        isLoading,
        isError,
        error,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: ['anime'],
        queryFn: fetchAnimes,
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 1,
    });

    const loadMore = useCallback(() => {
        if (hasNextPage) {
            fetchNextPage().then();
        }
    }, [fetchNextPage, hasNextPage]);

    const renderItem = ({ item }: { item: AnimeType }) => (
        <Anime
            anime={item}
            onPress={() => {
                navigation.navigate('AnimeDetails', {
                    animeId: item.id,
                    title: item.name,
                });
            }}
            withDetails={false}
        />
    );

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : isError ? (
                <Text>Error: {error.message}</Text>
            ) : (
                <FlatList
                    data={data?.pages.flatMap((page) => page.anime) || []}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    onEndReached={loadMore}
                    ListFooterComponent={
                        isFetchingNextPage ? (
                            <ActivityIndicator size="small" />
                        ) : null
                    }
                    contentContainerStyle={styles.container}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: 10,
        flexDirection: 'column',
    },
});

export default AnimeList;
