import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <form>
        <h1>SIGN IN</h1>
        <label htmlFor="">아이디</label>
        <input name="username" type="text" placeholder="test" />
        <label htmlFor="">비밀번호</label>
        <input name="password" type="password" />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
