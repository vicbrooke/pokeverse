import { useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export const Search = ({ setPokemonList }) => {
  const LIMIT = 10;
  const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

  const [initialPokemonList, setInitialPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(pokeApi);
      const data = await response.json();
      setPokemonList(data.results);
      setInitialPokemonList(data.results);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const filteredList = initialPokemonList.filter((pokemon) =>
      pokemon.name.includes(e.target.value.toLowerCase())
    );
    setPokemonList(filteredList);
  };

  return (
    <InputGroup className="input" onChange={handleChange}>
      <FormControl placeholder="Select your Pokemon" aria-label="Pokemon" />
    </InputGroup>
  );
};
