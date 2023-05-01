import React from "react";
import "./Home.scss";
import Banner from "../../components/banner/Banner";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import Feature from "../../components/feature/Feature";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Banner cards={cards} />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={1}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <Feature />
      <Slide slidesToShow={4} arrowsScroll={1}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
