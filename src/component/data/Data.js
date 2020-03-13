import React, { useState, useEffect } from "react";
import "./Data.scss";
import getIndividualData from "../../getIndividualData";

function Data({ match }) {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    getIndividualData(match.params.id).then(pokemonData => {
      setPokemonData({ pokemonData });
    });
  }, [match.params.id]);

  return pokemonData ? (
    <div className="individual-data">
      <h1>{pokemonData.pokemonData.name.toUpperCase()}</h1>
      <img
        src={pokemonData.pokemonData.sprites.front_default}
        alt={pokemonData.pokemonData.name}
      />
      <h2>Abilities</h2>
      {pokemonData.pokemonData.abilities.map(item => {
        return <p key={item.ability.name}>{item.ability.name}</p>;
      })}
      <h2>Height</h2>
      <p>{pokemonData.pokemonData.height}</p>
      <h2>Base experience</h2>
      <p>{pokemonData.pokemonData.base_experience}</p>
    </div>
  ) : null;
}

export default Data;
