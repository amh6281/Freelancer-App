import React, { useState } from "react";
import "./MyPage.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const currentUser = getCurrentUser();

  const [file, setFile] = useState(currentUser.img);
  const [user, setUser] = useState(currentUser);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = () => {
    setUser((prev) => {
      return { ...prev, isSeller: !user.isSeller };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await upload(file);
    try {
      await newRequest.put(`/users/${currentUser._id}`, {
        ...user,
        img: url,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);
  return (
    <div className="mypage">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>마이페이지</h1>
          <label htmlFor="">아이디</label>
          <input
            name="username"
            type="text"
            placeholder={currentUser.username}
            onChange={handleChange}
          />
          <label htmlFor="">이메일</label>
          <input
            name="email"
            type="email"
            placeholder={currentUser.email}
            onChange={handleChange}
          />
          <label htmlFor="">비밀번호</label>
          <input name="password" type="password" />
          <label htmlFor="">프로필 사진</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">국가</label>
          <input
            name="country"
            type="text"
            placeholder={currentUser.country}
            onChange={handleChange}
          />
          <button type="submit">업데이트</button>
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
            placeholder={currentUser.phone}
            onChange={handleChange}
          />
          <label htmlFor="">설명</label>
          <textarea
            placeholder={currentUser.desc}
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

export default MyPage;
