import React from "react";
import "./MyGig.scss";
import { useLocation } from "react-router-dom";

const MyGig = () => {
  const location = useLocation();
  const gig = location.state;
  console.log(gig);
  return (
    <div className="myGig">
      <div className="container">
        <h1>새 프로젝트 추가</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">제목</label>
            <input type="text" name="title" />
            <label htmlFor="">카테고리</label>
            <select name="cat" id="cat">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">커버 이미지</label>
                <input type="file" />
                <label htmlFor="">업로드 이미지</label>
                <input type="file" multiple />
              </div>
              <button></button>
            </div>
            <label htmlFor="">설명</label>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="16"
              placeholder="고객에게 서비스를 소개하기 위한 설명"
            />
            <button>생성</button>
          </div>
          <div className="right">
            <label htmlFor="">서비스 제목</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="ex) 웹 디자인 1페이지"
            />
            <label htmlFor="">짧은 설명</label>
            <textarea
              name="shortDesc"
              id=""
              placeholder="고객을 위한 짧은 서비스 설명"
              cols="30"
              rows="10"
            />
            <label htmlFor="">소요 시간 ex) 3일 </label>
            <input type="number" name="deliveryTime" />
            <label htmlFor="">수정 가능 횟수</label>
            <input type="number" name="revisionNumber" />
            <label htmlFor="">기능 추가</label>
            <form className="add" action="">
              <input type="text" placeholder="ex) 페이지 디자인" />
              <button type="submit">추가</button>
            </form>
            <div className="addedFeatures">
              <div className="item"></div>
            </div>
            <label htmlFor="">가격</label>
            <input type="number" name="price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGig;
