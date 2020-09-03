import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineLeftCircle } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import DescriptionAbility from './DescriptionAbility';

import { Back, Deitals } from './styles';

function PokemonDetails() {
    let { name } = useParams();

    const [info, setInfo] = useState();

    let source = axios.CancelToken.source();
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`, { cancelToken: source.token }).then(result => {
            setInfo(result.data);
        });
    }, [name, source.token]);

    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "space-between" }}>
                <Back as={Link} to="/"><AiOutlineLeftCircle  size={35} /></Back> Pokemon Details
            </h1>

            <Deitals>
                <div>
                    <LazyLoadImage
                        alt={name}
                        src={info?.sprites?.front_default}
                    />
                    <LazyLoadImage
                        alt={name}
                        src={info?.sprites?.back_default}
                    />
                </div>

                <div className="info-container">
                    <div className="info-container__personal">
                        <h1>{name} <small>nº {info?.id}</small></h1>
                        
                        <span><b>Exp.:</b> {info?.base_experience}</span>
                        <span><b>Weight:</b> {info?.weight}</span>
                        <span><b>Height:</b> {info?.height}</span>
                    </div>

                    <div className="info-container__stats">
                        <strong>Stats</strong>
                        {
                            info?.stats.map(stat => (
                                <span key={stat.stat.name}>
                                    <b>{stat.stat.name}: </b>
                                    {stat.base_stat}
                                </span>
                            ))
                        }
                    </div>
                
                    <div className="info-container__abilities">
                        <strong>Abilities</strong>
                        {
                            info?.abilities.map(ability => (
                                <span key={ability.ability.name}>
                                    <b>{ability.ability.name}: </b> <DescriptionAbility url={ability.ability.url} />
                                </span>
                            ))
                        }
                    </div>
                </div>
            </Deitals>

        </>
    );
}

export default PokemonDetails;