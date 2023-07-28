import React from "react";
import { useSelector } from "react-redux";
import EpisodeDetailsCard from "./EpisodeDetailsCard";
import CardComponent from "./CardComponent";

export default function EpisodeDetail(id) {
  const podcast = useSelector((state) => state.podcats);
  const podcastId = podcast.id;
  const title = podcast.title;
  const sumary = podcast.shortDescription;
  const artist = podcast.artist;
  const imageUrl = podcast.imageUrl;
  return (
    <div className="detailspage">
      <CardComponent />

      <EpisodeDetailsCard />
    </div>
  );
}
