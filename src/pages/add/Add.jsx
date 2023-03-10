import React from "react";

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
