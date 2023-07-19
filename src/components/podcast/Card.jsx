import React from "react";
import "../../styles/Card.css";

const Card = ({ title, description, imageUrl, artist }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-description">Autor:{artist}</p>
      </div>
    </div>
  );
};

export default Card;
