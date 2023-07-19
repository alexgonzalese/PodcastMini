import React from 'react'
import { useState } from "react";
import withResult from "../../data/withResult.json";
import Card from '../podcast/Card';


export default function PodcastList() {
    const podcasts = withResult.feed.entry;
  return (
    <>
      <div>
        <header>
          <h1>Buscador de Podcast</h1>
          <form className="formPodcast">
            <input type="text" placeholder="New Rory & MAL " />
            <button type="submit">Buscar</button>
          </form>
        </header>
        <main className="card-container">
          {podcasts.map((podcast, index) => (
            <Card
              key={index}
              title={podcast["im:name"].label}
              description={podcast["im:name"].label}
              imageUrl={podcast["im:image"][1].label}
              artist={podcast["im:artist"].label}
            />
          ))}
        </main>
      </div>
    </>
  );
}