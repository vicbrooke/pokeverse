
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Home from "./routes/Home";
import PokemonDetails from "./routes/PokemonDetails";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <div data-testid="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <Home pokemonList={pokemonList} setPokemonList={setPokemonList} />
            }
          />
          <Route path="/:name" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export { App };
