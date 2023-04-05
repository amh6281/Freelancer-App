import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

const GigCard = ({ gig }) => {
  const options = {
    style: "currency",
    currency: "krw",
  };

  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={gig.cover} alt="" />
        <div className="info">
          <div className="user">
            <img src={gig.pp} alt="" />
            <span>{gig.username}</span>
          </div>
          <p>{gig.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{gig.star}</span>
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
