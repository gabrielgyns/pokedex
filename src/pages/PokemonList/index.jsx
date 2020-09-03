/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './components/Card';

import { List } from './styles';

function PokemonList() {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [pokemonsList, setPokemonsList] = useState([]);

    useEffect(() => {
        let isActive = true;

        axios.get(url).then(resp => {
            if (isActive) {
                setPokemonsList(resp.data);
            }
        });

        return () => {
            isActive = false;
        };
    }, [url]);

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