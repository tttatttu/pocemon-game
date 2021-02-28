import { useState } from "react";
import Input from "../Input";
import s from "./style.module.css";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit && onSubmit({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={email}
        type="text"
        name="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        value={password}
        type="password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className={s.button}>Login</button>
    </form>
  );
};

export default LoginForm;
