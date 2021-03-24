import {useEffect, useState} from "react";
import Input from "../Input";
import s from "./style.module.css";

const LoginForm = ({onSubmit, isResetField = false}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setLogin] = useState(true);
    // const [isValid, setIsValid] = useState(false);

    console.log(email)
    /**/
    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit && onSubmit({
            type: isLogin ? 'login' : 'signup',
            email,
            password
        });
        setEmail("");
        setPassword("");

    };

    useEffect(() => {
        setEmail("");
        setPassword("");
    }, [isResetField])

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Email"
                value={email}
                name="email"
                // required
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                label="Password"
                value={password}
                name="password"
                // required
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className={s.flex}>
                <button className={s.button}>
                    { isLogin ? 'Login' : 'Signup'}
                </button>
                <div className={s.link} onClick={() => setLogin(!isLogin)}>
                    { isLogin ? 'Register' : 'Login'}
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
