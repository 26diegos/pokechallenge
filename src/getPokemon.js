import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

function getPokemon(offset) {
  return axios
    .get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}`,
      { headers }
    )
    .then(response => response.data);
}

export default getPokemon;
