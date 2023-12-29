type MovieGenre =
    | 12
    | 14
    | 16
    | 18
    | 28
    | 35
    | 36
    | 53
    | 80
    | 878
    | 9648
    | 10751
    | 10759
    | 10765;

type TVGenre =
    | 16
    | 18
    | 35
    | 80
    | 99
    | 10751
    | 10759
    | 10762
    | 10763
    | 10764
    | 10765
    | 10766
    | 10767
    | 10768
    | 10770;

type MediaType = "movie" | "tv";

type OriginCountry = "US" | "GB" | "JP" | "sv";

export type ResultMediaType = {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title?: string; // Optional for TV shows
    name?: string; // Optional for movies
    original_language: string;
    original_title?: string; // Optional for TV shows
    overview: string;
    poster_path: string;
    media_type: MediaType;
    genre_ids: MovieGenre[] | TVGenre[]; // Use MovieGenre for movies and TVGenre for TV shows
    popularity: number;
    release_date?: string; // Optional for TV shows
    first_air_date?: string; // Optional for movies
    video: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: OriginCountry[]; // Optional for TV shows
};

export type MovieDBResponse = {
    page: number;
    results: ResultMediaType[];
    total_pages: number;
    total_results: number;
};
