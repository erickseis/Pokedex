import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const PokemonDetail = () => {

    const { id } = useParams(); //para recibir lo que viene de id en route de app.jsx

    const [character, setCharacter] = useState({});
    useEffect(()=>{
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res=>setCharacter(res.data))
    }, [id])


    return (
        <div >
            <div>
            <img className='img-contend' src="https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Photo.png" alt="" />
            </div>
            <img src={character.sprites?.other.home.front_default} alt="" />
            <h1>{character.name}</h1>
                 <h2><strong>Type:</strong>  {character.types?.[0].type.name}  {character.types?.[1]?.type.name}   </h2>
                    <h2><strong>hp:</strong> {character.stats?.[0].base_stat}</h2>
                    <h2><strong>atack:</strong> {character.stats?.[1].base_stat}</h2>
                    <h2><strong>defense:</strong> {character.stats?.[2].base_stat}</h2>
                    <h2><strong>speed:</strong> {character.stats?.[5].base_stat}</h2>
             <div>
                <h2>Weight: <span> {character.weight}</span></h2>    
                <h2>height: <span>{character.height}</span></h2> 
                <h2>#: {character.id}</h2>
                </div>      
        </div>
    );
};

export default PokemonDetail;