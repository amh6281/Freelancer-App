import React from "react";
import "./Register.scss";

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
        <div className="right">
          <h1>판매자 회원가입</h1>
          <div className="toggle">
            <label htmlFor="">판매자 계정 활성화</label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">휴대폰 번호</label>
          <input name="phone" type="text" placeholder="010-1234-5678" />
          <label htmlFor="">설명</label>
          <textarea
            placeholder="짧은 자기소개"
            name="desc"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Register;
