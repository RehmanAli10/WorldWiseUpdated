// import { useState } from "react";
// import PageNav from "../components/PageNav";
// import Button from "../components/Button";
// import { useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";

// import styles from "./Login.module.css";
// import { useLogin } from "../hooks/useLogin";
// import { signinwithGoogle } from "../services/apiAuth.js";

// function Login() {
//   // PRE-FILLED FOR DEVELOPMENT PURPOSES
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const { login } = useLogin();

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!email || !password) return;

//     login({ email, password });
//   }

//   function handleSigninwithGoogle() {
//     signinwithGoogle();
//   }

//   return (
//     <main className={styles.login}>
//       <PageNav />
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <div className={styles.row}>
//           <label htmlFor="email">Email address</label>
//           <input
//             type="email"
//             id="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//           />
//         </div>

//         <div className={styles.row}>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//         </div>

//         <div className={styles.buttons}>
//           <Button type="primary">Login</Button>
//           <Button type="primary" onClick={() => navigate("/signup")}>
//             Signup
//           </Button>
//           <p>Or</p>
//           <FcGoogle
//             className={styles.googleIcon}
//             onClick={handleSigninwithGoogle}
//           />
//         </div>
//       </form>
//     </main>
//   );
// }

// export default Login;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";

import styles from "./Login.module.css";
import { useLogin } from "../hooks/useLogin";
import { signinwithGoogle } from "../services/apiAuth.js";
import { useUser } from "../hooks/useUser.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useLogin();

  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app");
    }
  }, [navigate, isAuthenticated]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  function handleSigninwithGoogle() {
    signinwithGoogle();
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
          <p>Or</p>
          <FcGoogle
            className={styles.googleIcon}
            onClick={handleSigninwithGoogle}
          />
        </div>
      </form>
    </main>
  );
}

export default Login;
