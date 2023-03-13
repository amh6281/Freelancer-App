import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>새 프로젝트 추가</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">제목</label>
            <input type="text" />
            <label htmlFor="">카테고리</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">커버 이미지</label>
            <input type="file" />
            <label htmlFor="">업로드 이미지</label>
            <input type="file" multiple />
            <label htmlFor="">설명</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="고객에게 서비스를 소개하기 위한 설명"
            />
            <button>생성</button>
          </div>
          <div className="right">
            <label htmlFor="">서비스 제목</label>
            <input type="text" placeholder="ex) 웹 디자인 1페이지" />
            <label htmlFor="">짧은 설명</label>
            <textarea
              name=""
              id=""
              placeholder="고객을 위한 짧은 서비스 설명"
              cols="30"
              rows="10"
            />
            <label htmlFor="">소요 시간 ex) 3일 </label>
            <input type="number" />
            <label htmlFor="">Revision Number</label>
            <input type="number" />
            <label htmlFor="">기능 추가</label>
            <input type="text" placeholder="ex) 페이지 디자인" />
            <input type="text" placeholder="ex) 파일 업로드" />
            <input type="text" placeholder="ex) 도메인 설정" />
            <input type="text" placeholder="ex) 호스팅" />
            <label htmlFor="">가격</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
