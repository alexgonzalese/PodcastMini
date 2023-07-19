import React from "react";
import withResult from "../../data/withResult.json";

function FnListPodcasts({ podcasts }) {
  return (
    <>
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        {podcasts.map((podcast, index) => (
          <li key={index}>
            <img src={podcast["im:image"][1].label} alt="Podcast Cover" />
            <h3>{podcast["im:name"].label}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}

function NoPodcastResults() {
  return <p>No hay resultados</p>;
}

export default function ListPodcast() {
  // const hasPodcast = podcasts.feed.entry?.length > 0;
  // console.log("\x1b[44m%s\x1b[0m", "listPodcast.jsx line:24 hasP", podcasts);
  const pod = withResult.feed.entry;
  const hasPodcast = pod.length > 0;

  return (
    <>
      {hasPodcast ? (
        <FnListPodcasts podcasts={pod} />
      ) : (
        <NoPodcastResults />
      )}
      {/* <ul>
        {pod.map((podcast, index) => (
          <li key={index}>
            <img src={podcast["im:image"][1].label} alt="Podcast Cover" />
            <h3>{podcast["im:name"].label}</h3>
          </li>
        ))}
      </ul> */}
    </>
  );
}
