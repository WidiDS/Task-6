// src/components/PokemonCard.js
import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ name, image }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default PokemonCard;
