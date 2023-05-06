import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/upload";
import "./Register.scss";

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>회원가입</h1>
          <label htmlFor="">아이디</label>
          <input
            name="username"
            type="text"
            placeholder="test"
            onChange={handleChange}
          />
          <label htmlFor="">이메일</label>
          <input
            name="email"
            type="email"
            placeholder="email@email.com"
            onChange={handleChange}
          />
          <label htmlFor="">비밀번호</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">프로필 사진</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">국가</label>
          <input
            name="country"
            type="text"
            placeholder="한국"
            onChange={handleChange}
          />
          <button type="submit">가입하기</button>
        </div>
        <div className="right">
          <h1>전문가 등록</h1>
          <div className="toggle">
            <label htmlFor="">전문가 활성화</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">휴대폰 번호</label>
          <input
            name="phone"
            type="text"
            placeholder="010-1234-5678"
            onChange={handleChange}
          />
          <label htmlFor="">설명</label>
          <textarea
            placeholder="짧은 자기소개"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
