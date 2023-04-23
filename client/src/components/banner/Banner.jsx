import React, { useState } from "react";
import "./Banner.scss";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="left">
          <h1>
            고객님에게 완벽한 서비스를 제공해줄 수 있는 <i>프리랜서</i> 를
            찾아보세요!
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder="ex) Web Design"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>검색</button>
          </div>
          <div className="popular">
            <span>인기 검색어:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
