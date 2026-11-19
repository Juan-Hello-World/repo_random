import type { FavoriteRequest } from "../types/Favorite";
import type { Movie } from "../types/Movie";
import api from "./api";



export const favoriteService = {
    getFavorites: async (userId: number): Promise<Movie[]> =>{
        const response = await api.get<Movie[]>(
            `/user/favorites/${userId}`
        );

        return response.data;
    },

    addFavorite: async (data: FavoriteRequest): Promise<Movie> =>{
        const response = await api.post<Movie>(
            `/user/favorites`,
            data
        );

        return response.data;
    },
}