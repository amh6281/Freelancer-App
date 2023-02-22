import React from "react";
import "./Home.scss";
import Banner from "../../components/banner/Banner";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import Feature from "../../components/feature/Feature";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={1}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <Feature />
    </div>
  );
};

export default Home;
