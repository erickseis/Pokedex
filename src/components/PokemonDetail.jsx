import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const PokemonDetail = () => {

    const { id } = useParams(); //para recibir lo que viene de id en route de app.jsx

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setCharacter(res.data))

    }, [id])


    return (
        <div className='PokemonDetail' >
            <div className='img-ball-detail'>
                 <img className='ball-detail' src="https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Photo.png" alt="" /> 
            </div>
           <div className='name-img'>
            <h1>{character.name?.toUpperCase() }</h1>
          
            <img className='imgDetail' src={character.sprites?.other.home.front_default} alt="" />
            <div className='img-base'> <br />
            </div>
            </div>

            <section className='description'>
                <div className='description-text'>

                <ul className='description-list'>
                    <li>  <strong> ID #</strong>{character.id}</li>
                    <li><strong>height</strong>{character.height}</li>
                
                    <li><strong>Abilities</strong> {character.abilities?.[0]?.ability?.name} </li>
                
                    <li><strong>Type</strong> {character.types?.[0].type.name}</li>
                    <li><strong>Forms</strong> {character.forms?.[0]?.name}</li>
                   
                
                </ul>

                </div>
            </section>
            <section className='stats'>
                <h1>STATS</h1>
                <div className="progress hp">
                    <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[0].base_stat}%` }} aria-valuenow={`${character.stats?.[0].base_stat}`} aria-valuemin="0" aria-valuemax="100">  {character.stats?.[0].base_stat}% </div>
                    
                </div>
                <br />
                <div className="progress atack">
                    <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[1].base_stat}%` }} aria-valuenow={`${character.stats?.[1].base_stat}`} aria-valuemin="0" aria-valuemax="100">{character.stats?.[1].base_stat}%</div>
                </div>
                <br />
                <div className="progress defense">
                    <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[2].base_stat}%` }} aria-valuenow={`${character.stats?.[2].base_stat}`} aria-valuemin="0" aria-valuemax="100">{character.stats?.[2].base_stat}%</div>
                </div>

                <br />
                <div className="progress  Sp. Attack">
                    <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[3].base_stat}%` }} aria-valuenow={`${character.stats?.[3].base_stat}`} aria-valuemin="0" aria-valuemax="100">{character.stats?.[3].base_stat}%</div>
                </div>

                <br />
                <div className="progress  Sp. Defense">
                    <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[4].base_stat}%` }} aria-valuenow={`${character.stats?.[4].base_stat}`} aria-valuemin="0" aria-valuemax="100">{character.stats?.[4].base_stat}%</div>
                </div>
                <br />
                <div className="progress  Sp. speed">
                    <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[5].base_stat}%` }} aria-valuenow={`${character.stats?.[5].base_stat}`} aria-valuemin="0" aria-valuemax="100">{character.stats?.[5].base_stat}%</div>
                </div>

                <h2><strong>Total</strong>"suma total "</h2>

            </section>
            <br />
            <section className='container-move'>
            <h1>Movements</h1>
                <br />
            <div className='moves'>
               
                {
                    character.moves?.map((move) => (
                        <li className='list-move'
                            key={move.move.name}
                        >{move.move.name}</li>
                    ))
                }

            </div>
            </section>
        </div>
    );
};

export default PokemonDetail;

//<span>{character.ability?.[1]?.ability?.name}