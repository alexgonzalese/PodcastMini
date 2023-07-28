import React from "react";
import { useSelector } from "react-redux";
import EpisodeDetailsCard from "./EpisodeDetailsCard";
import CardComponent from "./CardComponent";

export default function EpisodeDetail(id) {
  return (
    <div className="detailspage">
      <CardComponent />

      <EpisodeDetailsCard id={id} />
    </div>
  );
}
