import { AnimeType } from './types.ts';
import { apiGet } from '../../../shared/api/axiosInstance.ts';

const limit = 10;

export const fetchAnimes = async ({
    pageParam,
}: {
    pageParam: number;
}): Promise<{ anime: AnimeType[]; nextPage?: number }> => {
    const { data } = await apiGet('/animes', {
        params: { limit: limit + 1, page: pageParam, order: 'ranked' },
    });

    const hasNextPage = data.length > limit;

    const anime = hasNextPage ? data.slice(0, limit) : data;

    return {
        anime,
        nextPage: hasNextPage ? pageParam + 1 : undefined,
    };
};

export const fetchAnimeWithDetails = async (
    animeId: string,
): Promise<AnimeType> => {
    const { data } = await apiGet(`/animes/${animeId}`);
    return data;
};
