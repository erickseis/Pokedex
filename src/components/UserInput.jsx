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
                <h1 id="h1" >Hello Trainer</h1>
                <img className='imgUser img-characters' src="https://legends.pokemon.com/assets/home/characters.png" alt="" />
                <br />
                <input className='input-userName'
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Introducing your name"
                />
                <button className='btn-user'><i class="fa-solid fa-paper-plane"></i></button>
            </form>
            <div>
                <img className='imgUser mew-inputUser' id='mew' src="https://www.pngplay.com/wp-content/uploads/11/Mew-Pokemon-PNG-Photo-Image.png" alt="" />
                <img className='imgUser mewtwo-inputUser' id='mewtwo' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/905d008d-e774-4f04-8d1b-6aac3ef243c4/dalmygi-cb7f507e-5bb6-4aea-9751-9595b80c3b36.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwNWQwMDhkLWU3NzQtNGYwNC04ZDFiLTZhYWMzZWYyNDNjNFwvZGFsbXlnaS1jYjdmNTA3ZS01YmI2LTRhZWEtOTc1MS05NTk1YjgwYzNiMzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3suBV9pLhZkbQYqYrG8GvjFPlxj72HYfwdtGDpgGBm0" alt="" />
                <img className='imgUser pokeball-inputUser' id='transicion' src="https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png" alt="" />
                <img className='Ball-Atack' id='' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2844d369-3572-4372-8a19-c7b680f797be/deny506-194dff36-c120-4e62-b62f-c8f08e7b3506.png/v1/fill/w_1280,h_1280,strp/official_hakai_energy_ball_png_by_vs_animations_deny506-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzI4NDRkMzY5LTM1NzItNDM3Mi04YTE5LWM3YjY4MGY3OTdiZVwvZGVueTUwNi0xOTRkZmYzNi1jMTIwLTRlNjItYjYyZi1jOGYwOGU3YjM1MDYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.n0FXUk-6faULFPz0wQqY_K4XLJsomskhtPGtfarMs6M" alt="" />
                <img id='Ball-mew' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9890e778-66bc-4ba7-a99c-625a5dc98e6a/dat65fv-60965571-40d9-493f-bb8f-5608dcb910ec.png/v1/fill/w_550,h_550,strp/bola_energia_by_katiirina_dat65fv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTUwIiwicGF0aCI6IlwvZlwvOTg5MGU3NzgtNjZiYy00YmE3LWE5OWMtNjI1YTVkYzk4ZTZhXC9kYXQ2NWZ2LTYwOTY1NTcxLTQwZDktNDkzZi1iYjhmLTU2MDhkY2I5MTBlYy5wbmciLCJ3aWR0aCI6Ijw9NTUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.gt8mpdN6564lsSSQdzBYgfjbXd14hjOhw5CUm0Wr2yk" alt="" />
            </div>

        </div>
    );
};

export default UserInput;