/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Card({ pokemon }) {
    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get(pokemon.url).then(resul => {
            setInfo(resul.data);
        });
    }, []);

    return (
        <Link as="a" to={`/details/${pokemon.name}`}>
            <LazyLoadImage
                alt={pokemon.name}
                src={info?.sprites?.front_default}
            />
            <LazyLoadImage
                alt={pokemon.name}
                src={info?.sprites?.back_default}
            />

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