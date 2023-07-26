import { useState } from "react";
import withResult from "../data/withResult.json";
import { searchPodcast } from "../services/podcast";

export function usePodcast({ query }) {
  const [result, setResult] = useState();
  const [responsePodcasts, setResponsePodcasts] = useState(null);

  const podcasts = responsePodcasts || withResult.feed.entry;

  const mappedPodcasts = podcasts?.map((podcast) => ({
    id: podcast.id.attributes["im:id"],
    title: podcast.title.label,
    imageUrl: podcast["im:image"][1].label,
    artist: podcast["im:artist"].label,
    sumary: podcast.summary.label,
  }));

  const filterPodcasts = () => {
    // const rrr = async () => {
    //   console.log("entro a rrr");
    //   const aa = await searchPodcast();
    // };

    // rrr();

    if (query) {
      console.log("tiene query");
      fetch(
        `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
      )
        .then((response) => response.json())
        .then((data) => {
          setResult(data);
          const filteredPodcasts = data.feed.entry.filter((podcast) =>
            podcast.title.label.toLowerCase().includes(query.toLowerCase())
          );
          setResponsePodcasts(filteredPodcasts);
        })
        .catch((error) => console.error("Error al obtener los datos:", error));
    } else {
      console.log("NO tiene query");
      fetch(
        `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
      )
        .then((response) => response.json())
        .then((data) => {
          setResult(data);
        });
      setResponsePodcasts(result.feed.entry);
    }
  };

  return { podcasts: mappedPodcasts, filterPodcasts };
}
