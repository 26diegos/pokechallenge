import React, { useState, useEffect, useContext } from "react";
import "./Grid.scss";
import getPokemon from "../../getPokemon";
import { useHistory } from "react-router-dom";
import { OffsetContext } from "../../OffsetContext";

function Grid() {
  const [isFetching, setIsFetching] = useState(false);
  const [state, setState] = useContext(OffsetContext);
  const history = useHistory();

  useEffect(() => {
    if (!isFetching && state.offset !== 0) return;
    getPokemon(state.offset).then(pokemon => {
      setState(state => ({
        ...state,
        pokemonList: state.pokemonList.concat(pokemon.results)
      }));
      setState(state => ({ ...state, offset: state.offset + 20 }));
      setIsFetching(false);
    });
  }, [isFetching, setState, state.offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  };

  const handlePokemonClick = index => {
    history.push(`/pokemon/${index}`);
  };

  return (
    <div className="pokemon-grid">
      {state.pokemonList
        ? state.pokemonList.map((item, index) => (
            <div
              className="pokemon-element"
              onClick={() => handlePokemonClick(index + 1)}
              key={item.name}
            >
              <p className="name">{item.name.toUpperCase()}</p>
              <p>Click card to learn more</p>
            </div>
          ))
        : null}
    </div>
  );
}

export default Grid;
