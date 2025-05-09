// src/components/PokemonList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
      const pokemonData = await Promise.all(
        res.data.results.map(async (p) => {
          const pokemonRes = await axios.get(p.url);
          return { 
            name: pokemonRes.data.name, 
            image: pokemonRes.data.sprites.front_default 
          };
        })
      );
      setPokemon(pokemonData);
    };
    fetchPokemon();
  }, []);

  return (
    <div className="pokemon-list">
      {pokemon.map((p, index) => (
        <PokemonCard key={index} name={p.name} image={p.image} />
      ))}
    </div>
  );
};

export default PokemonList;
