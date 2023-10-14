import { createContext } from "react";
import { User } from "../interfaces/user";

export interface AuthContextType {
    user: User | null;
    signIn: (user: User) => Promise<void>;
    signOut: () => Promise<void>;
    isAuthenticated: boolean;
}

const defaultValue = {} as AuthContextType;

export const AuthContext = createContext<AuthContextType>(defaultValue);