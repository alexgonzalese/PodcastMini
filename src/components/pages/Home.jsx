import React, { useEffect, useState, useRef } from "react";
import Card from "../podcast/Card";
import { PodcastList } from "./Podcast";
import { usePodcast } from "../../hooks/usePodcast";

function useQuery() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === "";
      return;
    }

    if (query === "")
      setError("Por favor ingrese un nombre de podcast para buscar");
    return;

    if (query.length < 3)
      setError("Por favor ingrese un nombre de podcast para buscar");
    return;
  }, [query]);

  return { query, setQuery, error };
}

export default function Home() {

  const { query, setQuery, error } = useQuery();
   const { podcasts, filterPodcasts } = usePodcast({ query });


  const handleSummit = (e) => {
    e.preventDefault();
    filterPodcasts();
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery === " ") return;
    setQuery(e.target.value);
    filterPodcasts();
  };

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de Podcast</h1>
          <form className="formPodcast" onSubmit={handleSummit}>
            <input
              required={true}
              onChange={handleChange}
              value={query}
              placeholder="New Rory & MAL "
            />
            <button type="submit">Buscar</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </header>
        <main>
          <PodcastList podcastsList={podcasts} />
        </main>
      </div>
    </>
  );
}
