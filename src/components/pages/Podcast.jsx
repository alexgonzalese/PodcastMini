import React, { useEffect } from "react";
import Card from "../podcast/Card";
import "../../App.css";
import { genComponentStyleHook } from "antd/es/theme/internal";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPostcast } from "../../redux/podcatsSlice.js";

function PodcastItem({ podcast }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleImageClick = () => {
    dispatch(addPostcast(podcast));
    navigate(`/PodcastDetail`);
  };

  return (
    <li className="podcast">
      <img
        src={podcast.imageUrl}
        alt={podcast.title}
        onClick={handleImageClick}
      />
      <h3>{podcast.title}</h3>
      <p>{podcast.artist}</p>
    </li>
  );
}

function ListOfPodCast({ podcastsList }) {
  return (
    <ul className="podcasts">
      {podcastsList.map((podcast) => (
        <PodcastItem key={podcast.id} podcast={podcast} />
      ))}
    </ul>
  );
}
function NoPodcastResult() {
  return <p>No se encontraron resultados</p>;
}

export function PodcastList({ podcastsList }) {
  return (
    <>
      <ListOfPodCast podcastsList={podcastsList} />
    </>
  );
}
