import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

function getPokemon(index) {
  const url_prefix = "https://pokeapi.co/api/v2/pokemon/";
  return axios
    .get(`${url_prefix}${index}`, { headers })
    .then(response => response.data);
}

export default getPokemon;
