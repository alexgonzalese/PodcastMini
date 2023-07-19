import React from "react";

export default function SearchCustom() {
  return (
    <>
      <header>
        <h1>Buscador de Podcast</h1>
        <form className="formPodcast">
          <input type="text" placeholder="New Rory & MAL " />
          <button type="submit">Buscar</button>
        </form>
      </header>
    </>
  );
}