import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './components/Card';

import { List } from './styles';

function PokemonList() {
    const [url, setUrl] = useState('');
    const [pokemonsList, setPokemonsList] = useState([]);

    let source = axios.CancelToken.source();
    useEffect(() => {
        if (!url) {
            setUrl('https://pokeapi.co/api/v2/pokemon');
        }

        axios.get(url, { cancelToken: source.token }).then(resp => {
            setPokemonsList(resp.data);
        });
    }, [pokemonsList, source.token, url]);

    const navPage = (newUrl) => {
        document.documentElement.scrollTop = 0;
        setUrl(newUrl);
    }

    return (
        <div>
            <h1 >Pokemon List</h1>

            <List>
                {pokemonsList.results?.map(pokemon => (
                    <Card key={pokemon.name} pokemon={pokemon} />
                ))}

                <div className="pagination-container">
                    <button onClick={() => navPage(pokemonsList.previous)} disabled={!pokemonsList.previous}>Previous</button>
                    <button onClick={() => navPage(pokemonsList.next)} disabled={!pokemonsList.next}>Next</button>
                </div>
            </List>
        </div>
    );
}

export default PokemonList;