
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function PokemonCard({ url, name }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      </div>
    )

  );
}

export { PokemonCard };
