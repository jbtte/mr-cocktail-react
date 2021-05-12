import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Navbar from './Components/NavegationBar'
import RandomCocktail from './Components/external/RandomCocktail'
import FavoriteCocktail from './Components/favorite/FavoriteCocktail'
import DrinkFavorite from './Components/favorite/DrinkFavorite'
import DrinkRandom from './Components/external/DrinkRandom'
import AddCocktail from './Components/favorite/AddCocktail'
import AddImage from './Components/favorite/AddImage'



import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (<>
  <BrowserRouter>
    <Navbar />
    <main className="container">
      <Switch>
        <Route exact path='/'>
          <FavoriteCocktail />
          <hr style={{color: "white"}}/>
          <RandomCocktail /> 
        </Route>
        <Route exact path='/favorite/:id'>
          <DrinkFavorite />
        </Route>
        <Route exact path='/random/:name'>
          <DrinkRandom/>
        </Route>
        <Route exact path='/favorites'>
          <AddCocktail/>
        </Route>
        <Route exact path='/addimage'>
          <AddImage/>
        </Route>
      </Switch>
    </main>
  </BrowserRouter>
  </>);
}

export default App;
