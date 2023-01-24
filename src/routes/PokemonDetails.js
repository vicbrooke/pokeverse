import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default PokemonDetails = () => {
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
    <div data-testid="pokemon_details">
      <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
      <img src={pokemon.sprites.front_default} />

      <h3>Height: </h3>
      <p>{pokemon.height}</p>
      <h3>Weight: </h3>
      <p>{pokemon.weight}</p>
      <h3>
        Abilities:
        {pokemon.abilities.map((ability) => (
          <h4 key={ability.ability.name}>{ability.ability.name}</h4>
        ))}
      </h3>
      <h3>
        Types:
        {pokemon.types.map((type) => (
          <h4 key={type.type.name}>{type.type.name}</h4>
        ))}
      </h3>
      <h3>
        Stats:{" "}
        {pokemon.stats.map((stat) => (
          <>
            <h4 key={stat.stat.name}>{stat.stat.name}</h4>
            <h6 key={stat.base_stat}>{stat.base_stat}</h6>
          </>
        ))}
      </h3>
    </div>
  );
};
