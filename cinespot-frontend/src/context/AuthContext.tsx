import { createContext, useState, type ReactNode } from "react";
import type { LoginRequest, User } from "../types/User";
import { authService } from "../services/authService";

interface AuthContextType{
    user: User | null;
    login: (data: LoginRequest) => Promise<void>;
    logout: () => void;
}


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
    children
} : {children: ReactNode}){

    const [user, setUser] = useState<User | null>(() => {
        const saved = localStorage.getItem("user");
        if (!saved) return null;

        try{
            return JSON.parse(saved) as User;
        }
        catch{
            localStorage.removeItem("user");
            return null;
        }
    });

    async function login(data:LoginRequest) {
        const response = await authService.login(data);

        setUser(response);

        localStorage.setItem(
            "user",
            JSON.stringify(response)
        )
        
    }

    function logout(){
        setUser(null);
        localStorage.removeItem("user");
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}