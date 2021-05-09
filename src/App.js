import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Navbar from './Components/NavegationBar'
import RandomCocktail from './Components/RandomCocktail'
import FavoriteCocktail from './Components/FavoriteCocktail'
import DrinkFavorite from './Components/DrinkFavorite'
import DrinkRandom from './Components/DrinkRandom'


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (<>
  <BrowserRouter>
    <Navbar />
    <main className="container">
      <Switch>
        <Route exact path='/'>
          <FavoriteCocktail />
          <hr/>
          <RandomCocktail /> 
        </Route>
        <Route exact path='/favorite/:id'>
          <DrinkFavorite />
        </Route>
        <Route exact path='/random/:name'>
          <DrinkRandom/>
        </Route>
      </Switch>
    </main>
  </BrowserRouter>
  </>);
}

export default App;
