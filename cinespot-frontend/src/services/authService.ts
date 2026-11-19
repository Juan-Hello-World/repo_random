import type { LoginRequest, RegisterRequest, User } from "../types/User";
import api from "./api";


export const authService = {
    login: async (data: LoginRequest): Promise<User> => {
        const response = await api.post<User>(
            "/auth/login",
            data
        );

        return response.data;
    },

    register: async (data: RegisterRequest): Promise<User> => {
        const response = await api.post<User>(
            "/auth/register",
            data
        );
        return response.data;
    }
};