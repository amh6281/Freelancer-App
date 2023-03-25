import React from "react";

const Register = () => {
  return (
    <div className="register">
      <form>
        <div className="left">
          <h1>회원가입</h1>
          <label htmlFor="">아이디</label>
          <input name="username" type="text" placeholder="test" />
          <label htmlFor="">이메일</label>
          <input name="email" type="email" placeholder="email@email.com" />
          <label htmlFor="">비밀번호</label>
          <input name="password" type="password" />
          <label htmlFor="">프로필 사진</label>
          <input type="file" />
          <label htmlFor="">국가</label>
          <input name="country" type="text" placeholder="한국" />
          <button type="submit">가입하기</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
