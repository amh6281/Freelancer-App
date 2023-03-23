import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        {
          username,
          password,
        },
        { withCredentials: true } // origin이 달라 cookie에 token이 안들어가는 문제 해결
      );
      console.log(res.data);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>SIGN IN</h2>
        <label htmlFor="">아이디</label>
        <input
          name="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">비밀번호</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
