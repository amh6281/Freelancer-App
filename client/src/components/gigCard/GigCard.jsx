import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const GigCard = ({ gig }) => {
  const options = {
    style: "currency",
    currency: "krw",
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig.userId"],
    queryFn: () =>
      newRequest.get(`/users/${gig.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <Link to={`/gig/${gig._id}`} className="link">
      <div className="gigCard">
        <img src={gig.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading..."
          ) : error ? (
            "잘못된 접근입니다."
          ) : (
            <div className="user">
              <img src={data.img || "/img/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{gig.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(gig.totalStars / gig.starNumber) &&
                Math.round(gig.totalStars / gig.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <h2>
              {new Intl.NumberFormat("ko-KR", options).format(gig.price)}~
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
