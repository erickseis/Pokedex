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
            <h1>{character.name}</h1>
            <img  src={character.sprites?.other.home.front_default} alt="" />
        </div>
    );
};

export default PokemonDetail;