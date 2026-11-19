import type { Category } from "../types/Category"
import type { Movie } from "../types/Movie";
import api from "./api"


export const categoryService = {

    getCategories: async (): Promise<Category[]> => {
        const response = await api.get<Category[]>("/categories");
        return response.data;
    },

    getMovies: async (categoryId: number): Promise<Movie[]>=>{
        const response = await api.get<Movie[]>(
            `/categories/${categoryId}/movies`
        );
        return response.data;
    }

};