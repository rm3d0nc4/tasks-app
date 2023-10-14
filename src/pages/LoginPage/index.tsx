import { useRef } from "react";
import { useAuth } from "../../core/hooks/use_auth";
import { useNavigate } from "react-router-dom";

export function LoginPage() {

    const { signIn } = useAuth();
    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        if(email && password) {
            signIn({ email, password, name: "People" }).then(() => {
                navigate('/')
            }).catch((error) => {
                alert(error.message);
            });
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Email" ref={emailRef}/>
                <input type="password" placeholder="Password" ref={passwordRef}/>
                <input type="submit" value={'Login'} />
            </form>
            <h2>Safety First</h2>
        </>
    )
}