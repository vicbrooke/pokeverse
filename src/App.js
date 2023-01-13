import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigation } from "./components/Navigation";
import { PokemonCard } from "./components/PokemonCard";
import { Search } from "./components/Search";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <div data-testid="app">
      <Navigation />
      <Search setPokemonList={setPokemonList} />
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
