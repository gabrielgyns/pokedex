import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './components/Card';

import { Form, List } from './styles';

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

    const searchField = (e) => {
        e.preventDefault();

        let filteredList = pokemonsList.results.filter(pokemon => pokemon.name.includes('e.target.value'));
        console.log(pokemonsList.results);
        console.log(filteredList);
        console.log(e.target.value);
        setPokemonsList(filteredList);
    }

    return (
        <div>
            <h1 >Pokemon List</h1>

            <Form onChange={searchField}>
                <input type="text" placeholder="Filter here!" />
            </Form>

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