import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CharacterItem = ({CharacterUrl}) => {
    const [character, setCharacter] = useState({});
    const navigate= useNavigate();

    useEffect(()=>{
        axios.get(CharacterUrl)
        .then(res=> setCharacter(res.data))
    },[])
    
    console.log(character)
    return (
        <div onClick={()=> navigate(`/pokemons/${character.id}`)}>
            <h3> {character.name} </h3>
            <img src={character.sprites?.other.home.front_default} alt="" />
        </div>
    );
};

export default CharacterItem;