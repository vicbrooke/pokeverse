import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setPokemon(data);
    };
    fetchData();
  }, []);

  return !pokemon ? (
    <>Loading...</>
  ) : (
    <Container data-testid="pokemon_details">
      <Row>
        <Col>
          <h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={pokemon.sprites.front_default} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Height:</h2>
          <h3>{pokemon.height}</h3>
        </Col>
        <Col>
          <h2>Weight:</h2>
          <h3>{pokemon.weight}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>
            Abilities:
            {pokemon.abilities.map((ability) => (
              <h3 key={ability.ability.name}>{ability.ability.name}</h3>
            ))}
          </h2>
        </Col>
        <Col>
          <h2>
            Types:
            {pokemon.types.map((type) => (
              <h3 key={type.type.name}>{type.type.name}</h3>
            ))}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>
            Stats:{" "}
            {pokemon.stats.map((stat) => (
              <>
                <h3 key={stat.stat.name}>{stat.stat.name}</h3>
                <h3 key={stat.base_stat}>{stat.base_stat}</h3>
              </>
            ))}
          </h2>
        </Col>
      </Row>
    </Container>
  );
};
