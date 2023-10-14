import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use_auth";



interface ProtectedRouteProps {
    children: React.ReactNode;
}

export function ProtectedRoute({children}: ProtectedRouteProps) {
    const { isAuthenticated } = useAuth();

    if(!isAuthenticated) {
        return <Navigate to={'/login'}/>
    }
    
    return children;

}