import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { authHandler } from "../api/authHandler";
import axios from "axios";
function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  let history = useHistory();
  const submitAccount = async () => {
    if (email && password !== "") {
      const payload = {
        fullname: name,
        email: email,
        password1: password,
        password2: password2,
      };
      try {
        const res = await axios.post(
          "http://localhost:8000/auth/register",
          payload
        );
        console.log(res);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Email or password must not be empty");
    }
  };
  return (
    <>
      <div>Create an Account</div>
      <div>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
        />
        <br />
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
        <input
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
          value={password2}
          type="password"
          id="password2"
          name="password2"
          placeholder="Confirm Password"
        />
        <br />
        <button type="submit" onClick={submitAccount}>
          Sign Up
        </button>
      </div>
    </>
  );
}

export default SignUp;
