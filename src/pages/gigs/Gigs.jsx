import React, { useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          Freelancer &gt; Graphic & Design &gt;
        </span>
        <h1>AI Artist</h1>
        <p>Freelancer의 AI 아티스트를 찾아보세요.</p>
        <div className="menu">
          <div className="left">
            <span>가격</span>
            <input type="text" placeholder="최소" />
            <input type="text" placeholder="최대" />
            <button>적용</button>
          </div>
          <div className="right">
            <span className="sortType">
              {sort === "sales" ? "판매인기순" : "최신순"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>최신순</span>
                ) : (
                  <span onClick={() => reSort("sales")}>판매인기순</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} gig={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
