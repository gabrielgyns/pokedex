import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineRightCircle } from 'react-icons/ai';

function Card({ pokemon }) {
    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get(pokemon.url).then(resul => {
            setInfo(resul.data);
        })
    }, [pokemon.url]);

    return (
        <Link as="a" to={`/details/${pokemon.name}`}>
            <img src={info?.sprites?.front_default} alt={pokemon.name} />
            <img src={info?.sprites?.back_default} alt={pokemon.name} />

            <div className="info-container">
                <small>nº {info?.id}</small>
                <strong>{pokemon.name}</strong>

                <div className="info-container__types">
                    {info?.types?.map(type => <span key={type.type.name} className={type.type.name}>{type.type.name}</span>)}
                </div>
            </div>

            <div className="abilities-container">
                <strong>Abilities</strong>
                {info?.abilities.map(ability => (
                    <span key={ability.ability.name}>{ability.ability.name}</span>
                ))}
            </div>

            <AiOutlineRightCircle size={35} />
        </Link>  
    );
}

export default Card;