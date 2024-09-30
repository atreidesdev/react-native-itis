import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default function HomeScreen() {
    const movie = {
        title: 'Дюна: Часть вторая',
        description:
            'Герцог Пол Атрейдес присоединяется к фременам, чтобы стать Муад Дибом, одновременно пытаясь остановить наступление войны.',
        release: '2024',
        poster: 'https://images.kinorium.com/movie/poster/2808886/w700_52176680.jpg',
        countries: [
            'США',
            'Канада',
            'ОАЭ',
            'Венгрия',
            'Италия',
            'Новая Зеландия',
            'Иордания',
            'Гамбия'
        ],
        photos: [
            'https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/564f3483-699a-419e-a582-fb28cdd2d879/720x',
            'https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/65d488fe-b5a7-4e81-b5b3-0a5a2e79cfb9/720x',
            'https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/9ebe5fa6-93a5-455b-b079-671fee332c75/720x'
        ]
    };

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/0c67265b-6631-4e25-b89c-3ddf4e5a1ee7/1920x'
                }}
                style={styles.poster}
            />
            <View
                style={
                    styles.infoContainer
                }
            >
                <Text>
                    {movie.title}
                </Text>
                <Text>
                    {movie.description}
                </Text>
                <ScrollView horizontal>
                    {movie.countries.map(
                        (country) => (
                            <Text>
                                {
                                    country
                                }
                                {', '}
                            </Text>
                        )
                    )}
                </ScrollView>
                <Text>
                    Год релиза:{' '}
                    {movie.release}
                </Text>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={
                    styles.photosContainer
                }
            >
                {movie.photos.map(
                    (photo) => (
                        <Image
                            source={{
                                uri: photo
                            }}
                            style={
                                styles.photo
                            }
                        />
                    )
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
        gap: 15
    },
    poster: {
        width: 200,
        height: 300,
        alignSelf: 'center'
    },
    photo: {
        width: 200,
        height: 200,
        objectFit: 'cover'
    },
    photosContainer: {
        gap: 20
    },
    infoContainer: {
        gap: 5
    }
});
