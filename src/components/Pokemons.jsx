import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CharacterItem from "./CharacterItem";


const Pokemons = () => {
  const user = useSelector((state) => state.user);

  const [characterSearch, setCharacterSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [types, setTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => setCharacters(res.data.results));

    axios.get(`https://pokeapi.co/api/v2/type/`)
      .then(res => setTypes(res.data.results))
  }, [])

  console.log(characters)
  console.log(types)


  const submit = e => {
    e.preventDefault();
    navigate(`/pokemons/${characterSearch}`);

  }

  const filterTypes = e => {
    axios.get(e.target.value)
      .then(res => setCharacters(res.data.pokemon))
  }

  console.log(characters)





  return (
    <div className="Search-Pokemon">
      <h1>Pokedex</h1>
      <p>Welcome {user} it is the Pokedex</p>
      <form onSubmit={submit}>
        <input type="text"
          value={characterSearch}
          onChange={e => setCharacterSearch(e.target.value)}
        />
        <button>search</button>
      </form>

      <select onChange={filterTypes} >
        <option value="">select type</option>
        {
          types.map((type) => (
            <option
              value={type.url}
              key={type.url}
            >{type.name}</option>

          ))

        }

      </select>

      <ul className="Card-container">
        {
          characters?.map(character => (
            <CharacterItem  
              key={character.url ? character.url : character.pokemon.url} CharacterUrl={character.url ? character.url : character.pokemon.url}
            />

          )
          )}
      </ul>
    </div>
  );
};
export default Pokemons;

// character = {
//   name: ""
//   url: ""
// }

// character = {
//   pokemon:{
//     name: "",
//     url: ""
//   }
//   slot: ""

// }