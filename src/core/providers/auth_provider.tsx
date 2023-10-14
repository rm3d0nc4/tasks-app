import { useMemo, useState } from "react";
import { User } from "../interfaces/user";
import { AuthContext } from "../contexts/auth_context";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const user = localStorage.getItem("@TasksApp:user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  });

  const signIn = async (user: User) => {
    if (user.email == "nome@email.com" && user.password == "senha") {
      localStorage.setItem("@TasksApp:user", JSON.stringify(user));
      setUser(user);
    } else {
      throw new Error("User or password invalid!");
    }
  };

  const signOut = async () => {
    localStorage.removeItem("@TasksApp:user");
    setUser(null);
  };

  const value = useMemo(() => ({ user, signIn, signOut, isAuthenticated: user !== null }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
