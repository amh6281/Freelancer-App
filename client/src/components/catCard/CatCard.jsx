import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

const CatCard = ({ card }) => {
  return (
    <Link to={`/gigs?cat=${card.link}`}>
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
};

export default CatCard;
