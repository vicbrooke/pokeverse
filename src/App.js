import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavouritesProvider } from "./components/FavouritesProvider";
import { Navigation } from "./components/Navigation";
import { Home } from "./routes/Home";
import { PokemonDetails } from "./routes/PokemonDetails";
import { Favourites } from "./routes/Favourites";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <FavouritesProvider>
      <div data-testid="app">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  pokemonList={pokemonList}
                  setPokemonList={setPokemonList}
                />
              }
            />
            <Route path="/:name" element={<PokemonDetails />} />
            <Route
              path="/favourites"
              element={<Favourites pokemonList={pokemonList} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </FavouritesProvider>
  );
}

export { App };
