
import { Col, Container, Row } from "react-bootstrap";
import { PokemonCard } from "../components/PokemonCard";
import { Search } from "../components/Search";

export default Home = ({ pokemonList, setPokemonList }) => {
  return (
    <div data-testid="home">
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
};

