import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pokemons from '../components/Pokemons';



const ColorType = ({typePokemon}) => {
 

const colors =() =>{
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
  
};

export default ColorType;