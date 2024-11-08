export type AnimeType = {
    id: number;
    name: string;
    score: string;
    status: string;
    image: Image;
    description?: string;
    genres?: Genre[];
    released_on?: string;
};

type Image = {
    original: string;
    preview: string;
};

type Genre = { id: number; russian: string };
