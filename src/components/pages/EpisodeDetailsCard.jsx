import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

const { Meta } = Card;

export default function EpisodeDetailsCard() {

  const episodeId = { id };

  const [trackName, setTrackName] = useState("");
  const [description, setDescription] = useState("");



  useEffect(() => {
    if (episodeId) {
      // Realizar la solicitud Fetch para obtener los datos del episodio
      const fetchEpisodeDetails = async () => {
        try {
          const apiUrl = `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode`;
          const response = await fetch(apiUrl);
          const data = await response.json();

          // Verificar que haya resultados y que sea un episodio válido
          if (
            data.resultCount > 0 &&
            data.results[0].wrapperType === "track" &&
            data.results[0].kind === "podcast-episode"
          ) {
            const episode = data.results[0];
            const { trackName, description } = episode;
            setTrackName(trackName);
            setDescription(description);
          }
        } catch (error) {
          console.error("Error al obtener los detalles del episodio:", error);
        }
      };

      fetchEpisodeDetails();
    }
  }, [episodeId, dispatch]);

  return (
    <Card hoverable style={{ width: 300 }}>
      <h3>{trackName}</h3>
      <p>{description}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PlayCircleOutlined
          style={{ fontSize: 24, color: "blue", marginRight: 8 }}
        />
        <span>Play Episode</span>
      </div>
    </Card>
  );
}
