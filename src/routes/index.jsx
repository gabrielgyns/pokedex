import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PokemonList from '../pages/PokemonList';
import PokemonDetail from '../pages/PokemonDetails';

function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={PokemonList} />
        <Route path="/details/:name" component={PokemonDetail} />
    </Switch>
  );
};

export default Routes;
