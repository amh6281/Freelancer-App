import React, { useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      newRequest.get("/gigs").then((res) => {
        return res.data;
      }),
  });

  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadCrumbs">
          Freelancer &gt; Graphic & Design &gt;
        </span>
        <h1>AI Artist</h1>
        <p>Freelancer의 AI 아티스트를 찾아보세요.</p>
        <div className="menu">
          <div className="left">
            <span>가격</span>
            <input type="text" placeholder="최소" />
            <input type="text" placeholder="최대" />
            <button onClick={apply}>적용</button>
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
          {isLoading
            ? "loading..."
            : error
            ? "잘못된 접근입니다."
            : data.map((gig) => <GigCard key={gig.id} gig={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
