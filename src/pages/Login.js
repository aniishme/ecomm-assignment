import React, { useState } from "react";
// import { authHandler } from "../api/authHandler";
import { useHistory } from "react-router-dom";

function Login({ auth, setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();
  // const location = useLocation();
  const submitLogin = async () => {
    setAuth(true);
    localStorage.setItem("token", true);
    history.push("/");
    // if (email && password !== "") {
    //   try {
    //     const payload = {
    //       email: email,
    //       password: password,
    //     };
    //     const data = await authHandler(payload, "login");
    //     localStorage.setItem("token", JSON.stringify(data));
    //     setError(null);
    //   } catch (err) {
    //     setError(err);
    //   }
    // } else {
    //   setError({ message: "Email or password must not be empty" });
    // }
  };

  return (
    <>
      <div>Login Page</div>
      <div>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <button type="submit" onClick={submitLogin}>
          Log In
        </button>
        {error && <div>{error.message}</div>}
      </div>
    </>
  );
}

export default Login;
