import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import { useLogin } from "../hooks/useLogin";

function Login() {
  // PRE-FILLED FOR DEVELOPMENT PURPOSES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login, isLoggingIn } = useLogin();

  // const { login, isAuthenticated } = useAuth();

  // useEffect(
  //   function () {
  //     if (isAuthenticated) navigate("/app", { replace: true });
  //   },
  //   [isAuthenticated, navigate]
  // );

  function handleSubmit(e) {
    if (!email || !password) return;

    e.preventDefault();
    login({ email, password });
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className={styles.buttons}>
          <Button type="primary">Login</Button>
          <Button type="primary" onClick={() => navigate("/signup")}>
            Signup
          </Button>
        </div>
      </form>
    </main>
  );
}

export default Login;
