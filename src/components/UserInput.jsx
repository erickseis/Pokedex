import React, { useState } from 'react';
import { changeUser } from '../store/slices/user.slices';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Actions:
// 1. Crear la accion en el slice
// 2. Exportar la accion
// 3. Importarla en el componente donde la utilizaremos
// 4. Importar y ejecutar useDispatch
// 5. despachamos la acción

const UserInput = () => {
const [userName, setUserName] = useState("");

const dispatch = useDispatch();
const navigate = useNavigate();

const submit = (e) => {
    e.preventDefault();
    dispatch(changeUser(userName));
    navigate("/pokemons");
};



    return (

    <div className="input-user">
        <form className='form-user' onSubmit={submit}>
            <h1>Hello!!! trainer...</h1>
            <img className='imgUser img-characters' src="gh-pages/characters.png" alt="" />
            <br />
            <input className='input-userName'
            type="text" 
            value={userName}
            onChange={(e)=>setUserName(e.target.value)} 
            placeholder="Introducing your name"
            
            />
            <button className='btn-user'><i class="fa-solid fa-paper-plane"></i></button>
        </form>
<div>
    <img className='imgUser mew-inputUser' id='mew' src="gh-pages/meww.png" alt="" />
    <img className='imgUser mewtwo-inputUser' id='mewtwo' src="gh-pages/Mewtwo.png" alt="" />
    <img className='imgUser pokeball-inputUser' id='transicion' src="gh-pages/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.webp" alt="" />

</div>

</div>
    );
};

export default UserInput;