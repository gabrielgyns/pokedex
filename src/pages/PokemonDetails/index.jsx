import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineLeftCircle } from 'react-icons/ai';

import DescriptionAbility from './DescriptionAbility';

import { Back, Deitals } from './styles';

function PokemonDetails() {
    let { name } = useParams();

    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(result => {
            setInfo(result.data);
        });
    }, [name]);

    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "space-between" }}>
                <Back as={Link} to="/"><AiOutlineLeftCircle  size={35} /></Back> Pokemon Details
            </h1>

            <Deitals>
                <div>
                    <img src={info?.sprites?.front_default} alt={name} />
                    <img src={info?.sprites?.back_default} alt={name} />
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