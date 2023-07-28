import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { set } from "date-fns";

const { Meta } = Card;

export default function EpisodeDetailsCard(id) {

  const episodeId = {id};

  const [trackName, setTrackName] = useState("");
  const [description, setDescription] = useState("");
  const [episodeUrl, setEpisodeUrl] = useState("");

  useEffect(() => {
    if (episodeId) {
      const fetchEpisodeDetails = async () => {
        try {
          const apiUrl = `https://itunes.apple.com/lookup?id=episodeId&entity=podcastEpisode`;
          const response = await fetch(apiUrl);
          const data = await response.json();
console.log(data);
          if (
            data.resultCount > 0 &&
            data.results[0].wrapperType === "track" &&
            data.results[0].kind === "podcast-episode"
          ) {
            const episode = data.results[0];
            console.log(episode);
            const { trackName, description, episodeUrl, } = episode;
            setTrackName(trackName);
            setDescription(description);
            setEpisodeUrl(episodeUrl);
          }
        } catch (error) {
          console.error("Error al obtener los detalles del episodio:", error);
        }
      };

      fetchEpisodeDetails();
    }
  }, [episodeId]);

  return (
    <div>
      <h2>{trackName}</h2>
      <p>{description}</p>
      <audio controls>
        <source src={episodeUrl} type="audio/mpeg" />
        Tu navegador no admite el elemento de audio.
      </audio>
    </div>
  );
}
