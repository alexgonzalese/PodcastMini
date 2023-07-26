import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "./CardComponent";
import GridComponents from "./GridComponents";
import axios from "axios";
// `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`

export default function PodcastDetail() {
  const { id, title, sumary, artist, imageUrl } = useParams();

  const apiUrl = `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode`;

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(apiUrl);
        const { results } = result.data;

        // Verificar que hay resultados antes de agregar al array
        if (Array.isArray(results) && results.length > 0) {
          const extractedEpisodes = results.map((episode) => ({
            resultCount: results.length,
            releaseDate: episode.releaseDate,
            trackName: episode.trackName,
            trackTimeMillis: episode.trackTimeMillis,
            trackId: episode.trackId,
          }));
          //   console.log(extractedEpisodes);
          setEpisodes(extractedEpisodes);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, [podcastId]);

  return (
    <div className="detailspage">
      <CardComponent
        title={title}
        summary={sumary}
        artist={artist}
        imageUrl={imageUrl}
      />
      <GridComponents episodes={episodes} />
    </div>
  );
}
