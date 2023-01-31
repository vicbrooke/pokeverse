import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FavouritesContext } from "../components/FavouritesProvider";
import { PokemonCard } from "../components/PokemonCard";

export const Favourites = ({ pokemonList }) => {
  const { favourites } = useContext(FavouritesContext);

  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let tempList = [];
    pokemonList.forEach((pokemon) => {
      if (favourites.includes(pokemon.name)) {
        tempList.push(pokemon);
      }
    });
    setFilteredList(tempList);
    setIsLoading(false);
  }, [favourites, pokemonList]);

  return (
    !isLoading && (
      <div data-testid="home">
        <Container>
          <Row>
            {filteredList.map((favourite) => (
              <Col lg={3} key={favourite.name} className="my-4">
                <PokemonCard
                  key={favourite.name}
                  name={favourite.name}
                  url={favourite.url}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  );
};
