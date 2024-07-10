import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

function Signup() {
  // PRE-FILLED FOR DEVELOPMENT PURPOSES
  const [email, setEmail] = useState("rehman@example.com");
  const [password, setPassword] = useState("qwerty");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/login", { replace: true });
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
          <Button type="primary" onClick={() => navigate("/signup")}>
            Signup
          </Button>
        </div>
      </form>
    </main>
  );
}

export default Signup;
