import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavouritesContext, FavouritesProvider } from "./FavouritesProvider.js";

export const PokemonCard = ({ url, name }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    !isLoading && (
      <div>
        <Link to={`/${name}`}>
          <Card>
            <Card.Img src={pokemonData.sprites.front_default} />
            <Card.Header>{name[0].toUpperCase() + name.slice(1)}</Card.Header>
            <Card.Subtitle className="subtitle">Abilities:</Card.Subtitle>
            <ul>
              <Card.Text>
                {pokemonData.abilities.map((ability) => {
                  return (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                  );
                })}
              </Card.Text>
            </ul>
          </Card>
        </Link>
        {favourites.includes(pokemonData.name) ? (
          <Button variant="primary" onClick={() => removeFavourite(name)}>
            Remove from favourites
          </Button>
        ) : (
          <Button variant="primary" onClick={() => addFavourite(name)}>
            Add to favourites
          </Button>
        )}
      </div>
    )
  );
};
