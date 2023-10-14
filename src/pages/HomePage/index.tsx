import { useAuth } from "../../core/hooks/use_auth";

export function HomePage() {
    const { user, isAuthenticated } = useAuth();
    return (
        <>
            <h1>Home Page</h1>
            <h2>Hello {isAuthenticated ? user?.name : "stranger"}</h2>
            <h2>Welcome to my wonderful world</h2>
        </>
    )
}