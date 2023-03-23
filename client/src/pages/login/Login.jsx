import React, { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
    } catch (err) {
      setError(err.response.data);
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
        {error && error}
      </form>
    </div>
  );
};

export default Login;
