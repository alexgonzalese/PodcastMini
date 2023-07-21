import React from "react";
import Card from "../podcast/Card";

function ListOfPodCast({ podcastsList }) {
  return (
    <>
      <div>
        {podcastsList.map((podcastsList) => (
          <Card
            key={podcastsList.id}
            title={podcastsList.title}
            description={podcastsList.description}
            imageUrl={podcastsList.imageUrl}
            artist={podcastsList.artist}
          />
        ))}
      </div>
    </>
  );
}
function NoPodcastResult() {
  return <p>No se encontraron resultados</p>;
}

export function PodcastList({ podcastsList }) {
  return (
    <>
      {podcastsList.length > 0 ? (
        <ListOfPodCast podcastsList={podcastsList} />
      ) : (
        <NoPodcastResult />
      )}
    </>
  );
}
