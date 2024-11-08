import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { POSTER_PATH } from '../../../shared/constants.ts';
import { AnimeType } from '../model/types.ts';

const cleanDescription = (description: string) => {
    const cleanedText = description.replace(/\[.*?]/g, '');
    return cleanedText.replace(/\n/g, ' ');
};

type Props = {
    anime: AnimeType;
    onPress?: () => void;
    withDetails?: boolean;
    showTitle?: boolean;
};

export const Anime = ({
    anime,
    onPress,
    withDetails = false,
    showTitle = true,
}: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, withDetails ? styles.page : styles.card]}
        >
            {showTitle && (
                <Text style={styles.title} numberOfLines={1}>
                    {anime.name}
                </Text>
            )}
            <Image
                source={{
                    uri: POSTER_PATH + anime.image.original,
                }}
                style={styles.poster}
            />
            <View style={styles.info}>
                <Text>{anime.score}</Text>
                <Text>{anime.released_on?.slice(0, 4)}</Text>
                <Text>{anime.status}</Text>
            </View>

            {withDetails && (
                <View style={styles.details}>
                    <Text>Жанры</Text>
                    <View style={styles.genres}>
                        {anime.genres?.map((genre) => (
                            <Text key={genre.id} style={styles.genre}>
                                {genre.russian}
                            </Text>
                        ))}
                    </View>
                    <Text style={styles.description}>
                        {cleanDescription(anime.description || '')}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 0.5,
        width: 300,
        height: 370,
        gap: 5,
    },
    page: {
        gap: 10,
        padding: 10,
    },
    poster: {
        width: 200,
        height: 300,
        objectFit: 'cover',
    },
    title: {
        fontSize: 24,
    },
    info: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    details: {
        width: '80%',
        flexDirection: 'column',
    },
    genres: {
        flexDirection: 'row',
        columnGap: 5,
        flexWrap: 'wrap',
    },
    genre: {
        fontSize: 14,
    },
    description: {
        fontSize: 14,
    },
});
