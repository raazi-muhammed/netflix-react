import { apiKey } from "../constants/constants";
import {
    MovieDBResponse,
    ResultMediaType,
} from "../types/moveisServices.types";

export default class MoviesService {
    httpClient;
    apiKey = apiKey;
    constructor(httpClient: any) {
        this.httpClient = httpClient;
    }

    async getTrending(): Promise<MovieDBResponse | null> {
        try {
            const response = await this.httpClient.get(
                `https://api.themoviedb.org/3/trending/all/day?language=en-US`
            );
            return response.data as MovieDBResponse;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async getPopular(): Promise<MovieDBResponse | null> {
        try {
            const response = await this.httpClient.get(
                `https://api.themoviedb.org/3/tv/popular?language=en-US&`
            );

            return response.data as MovieDBResponse;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async getTrailer(id: string): Promise<string | null> {
        try {
            const response = await this.httpClient.get(
                `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
            );

            const videos = response.data.results;
            let youtubeLink: string | undefined;
            videos.map((vid: any) => {
                if (vid.site == "YouTube" && vid.key != "") {
                    youtubeLink = vid.key;
                }
            });

            return youtubeLink ? youtubeLink : null;
        } catch (error) {
            try {
                const response = await this.httpClient.get(
                    `https://api.themoviedb.org/3/tv/${id}/videos`
                );

                const videos = response.data.results;
                let youtubeLink: string | undefined;
                videos.map((vid: any) => {
                    if (vid.site == "YouTube" && vid.key != "") {
                        youtubeLink = vid.key;
                    }
                });

                return youtubeLink ? youtubeLink : null;
            } catch (error) {
                console.log(error);
                return null;
            }
        }
    }

    async getSingleMediaDetails(id: string): Promise<ResultMediaType | null> {
        try {
            const response = await this.httpClient.get(
                `https://api.themoviedb.org/3/movie/${id}?language=en-US`
            );

            return response.data as ResultMediaType;
        } catch (error) {
            try {
                const response = await this.httpClient.get(
                    `https://api.themoviedb.org/3/tv/${id}?language=en-US`
                );
                return response.data as ResultMediaType;
            } catch (error) {
                console.log(error);
                return null;
            }
        }
    }
    async getMovies() {
        //        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
        try {
            const response = await this.httpClient.get(
                `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
