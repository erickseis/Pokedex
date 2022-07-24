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
        <div className='Cards' onClick={()=> navigate(`/pokemons/${character.id}`)}>
            <h3> {character.name} </h3>
                <img className='img-contend' src="https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-File.png" alt="" />
                <img className='img-pokeCard' src={character.sprites?.other.home.front_default} alt="" />
                <div className='list-feature'>
                    <li><strong>Type:</strong>  {character.types?.[0].type.name}  </li>
                    <li><strong>hp:</strong> {character.stats?.[0].base_stat}</li>
                    <li><strong>atack:</strong> {character.stats?.[1].base_stat}</li>
                    <li><strong>defense:</strong> {character.stats?.[2].base_stat}</li>
                    <li><strong>speed:</strong> {character.stats?.[5].base_stat}</li>
                              
                </div>
        
        

            </div>
    );
};

export default CharacterItem;