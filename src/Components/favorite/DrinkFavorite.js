import {useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import useFetch from '../helpers/useFetch' 

import DrinkSingle from '../helpers/DrinkSingle'
import AddDose from './AddDose'


export default function RandomDrink () {
  const {id} = useParams()
  const {get} = useFetch('http://127.0.0.1:3001/cocktails/')
  const [drink, setDrink ] = useState({})

  useEffect(()=>{
    get(id)
    .then(data => {
      setDrink(data)
    })
    .catch(e => console.log(e))
  }, [])

  var ingredients = []
  if (Object.keys(drink).length !== 0) {
     ingredients =  drink.doses.map(dose => {
      const amount = dose.description
      const ingredient = dose.ingredient.name
      return `${amount} - ${ingredient}`
    }) 
  }


  return (<>
  <div>
    <DrinkSingle 
    image={drink.image}
    name={drink.name}
    // instructions={drink.strInstructions}
    ingredients = {ingredients}
    />
  </div>
  <div>
    <AddDose cocktail={id} />
  </div>
 </> )
}