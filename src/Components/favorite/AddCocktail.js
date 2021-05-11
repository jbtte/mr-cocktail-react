import AddIngredient from './AddIngredient'
import AddDrink from './AddDrink'

export default function AddCocktail () {
  
  return (<>
  <div className = "row mt-5 justify-content-around">
    <AddDrink />
    <AddIngredient />
  </div> 
  </>)
}