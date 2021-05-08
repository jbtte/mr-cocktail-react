import './App.css';
import Navbar from './Components/NavegationBar'
import RandomCocktail from './Components/RandomCocktail'
import FavoriteCocktail from './Components/FavoriteCocktail'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (<>
    <Navbar />
    <div className="container">
    <FavoriteCocktail />
    <hr/>
    <RandomCocktail />
    </div>

  </>);
}

export default App;
