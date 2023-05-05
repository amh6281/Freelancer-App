import React from "react";
import "./Home.scss";
import Banner from "../../components/banner/Banner";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import Feature from "../../components/feature/Feature";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest.get("/gigs").then((res) => {
        return res.data;
      }),
  });
  console.log(data);
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
      {isLoading ? (
        "loading..."
      ) : error ? (
        "잘못된 접근입니다."
      ) : (
        <Slide slidesToShow={4} arrowsScroll={1}>
          {data.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </Slide>
      )}
    </div>
  );
};

export default Home;
