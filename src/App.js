import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { Navigation } from "./components/Navigation";
import { PokemonCard } from "./components/PokemonCard";

const LIMIT = 10;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);
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
    <div data-testid="app">
      <Navigation />
      <InputGroup className="input" onChange={handleChange}>
        <FormControl placeholder="Select your Pokemon" aria-label="Pokemon" />
      </InputGroup>
      <Container>
        <Row>
          {pokemonList.map((pokemon) => (
            <Col lg={3} key={pokemon.name} className="my-4">
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export { App };
