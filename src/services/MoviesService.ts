import { apiKey } from "../constants/constants";
import { MovieDBResponse } from "../types/moveisServices.types";

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
