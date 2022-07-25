import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pokemons from './Pokemons';

const CharacterItem = ({CharacterUrl}) => {
    const [character, setCharacter] = useState({});
    const navigate= useNavigate();

    useEffect(()=>{
        axios.get(CharacterUrl)
        .then(res=> setCharacter(res.data))
    },[])
    
    console.log(character)

const typePokemon = character.types?.[0].type.name;

const colorType =() =>{
    if(typePokemon == "dark"){
        return(
            "Cards dark" 
        )
    }else if(typePokemon =="normal"){
        return(
            "Cards normal"
        )
    }else if(typePokemon == "fighting"){
        return(
            "Cards fighting"
        )
    }else if(typePokemon == "flying"){
        return(
            "Cards flying"
        )
    }else if(typePokemon == "poison"){
        return(
            "Cards poison"
        )
    }else if(typePokemon == "ground"){
        return(
            "Cards ground"
        )
    }else if(typePokemon == "rock"){
        return(
            "Cards rock"
        )
    }else if(typePokemon == "bug"){
        return(
            "Cards bug"
        )
    }else if(typePokemon == "ghost"){
        return(
            "Cards ghost"
        )
    }else if(typePokemon == "steel"){
        return(
            "Cards steel"
        )
    }else if(typePokemon == "fire"){
        return(
            "Cards fire"
        )

    }else if(typePokemon == "water"){
        return(
            "Cards water"
        )
    }else if(typePokemon =="grass"){
        return(
            "Cards grass"
        )
    }else if(typePokemon =="electric"){
        return(
            "Cards electric"
        )
    }else if(typePokemon =="psychic"){
        return(
            "Cards psychic"
        )
    }else if(typePokemon =="ice"){
        return(
            "Cards ice"
        )
    }else if(typePokemon =="dragon"){
        return(
            "Cards dragon"
        )
    }else if(typePokemon =="fairy"){
        return(
            "Cards fairy"
        )
    }
}
    

    return (
        <div className={colorType()} onClick={()=> navigate(`/pokemons/${character.id}`)}>
          
            <h3> {character.name} </h3>
                <img className='img-contend' src="https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Photo.png" alt="" />
                <img className='img-pokeCard' src={character.sprites?.other.home.front_default} alt="" />
                <div className='list-feature'>
                    <li><strong>Type:</strong>  {character.types?.[0].type.name}  {character.types?.[1]?.type.name}   </li>
                    <li><strong>hp:</strong> {character.stats?.[0].base_stat}</li>
                    <li><strong>atack:</strong> {character.stats?.[1].base_stat}</li>
                    <li><strong>defense:</strong> {character.stats?.[2].base_stat}</li>
                    <li><strong>speed:</strong> {character.stats?.[5].base_stat}</li>
                              
                </div>
        
        

            </div>
    );
};

export default CharacterItem;