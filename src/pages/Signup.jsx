import { useState } from "react";
import PageNav from "../components/PageNav";
import Button from "../components/Button";

import styles from "./Login.module.css";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    signup({ email, password });

    setEmail("");
    setPassword("");
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
          <Button type="primary">Signup</Button>
        </div>
      </form>
    </main>
  );
}

export default Signup;
