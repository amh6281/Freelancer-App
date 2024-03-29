import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
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
            <input ref={minRef} type="text" placeholder="최소" />
            <input ref={maxRef} type="text" placeholder="최대" />
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
            : data.map((gig) => <GigCard key={gig._id} gig={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
