import React from "react";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";

const Gigs = () => {
  return (
    <div>
      {gigs.map((gig) => {
        <GigCard key={gig.id} gig={gig} />;
      })}
    </div>
  );
};

export default Gigs;
