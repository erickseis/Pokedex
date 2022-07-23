import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PokemonDetail from './components/PokemonDetail'
import Pokemons from './components/Pokemons'
import ProtectedRoutes from './components/ProtectedRoutes'
import UserInput from './components/UserInput'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<UserInput  />} />
          
          
        <Route element={<ProtectedRoutes />}>

             <Route path='/pokemons' element={<Pokemons />} />
             <Route path='/pokemons/:id' element={<PokemonDetail />} />
             </Route>

        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
