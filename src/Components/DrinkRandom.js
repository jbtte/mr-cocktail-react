import {useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import useFetch from './useFetch'

import DrinkSingle from './DrinkSingle'

export default function RandomDrink () {
  const {name} = useParams()
  const {get} = useFetch('https://www.thecocktaildb.com/api/json/v1/1/')
  const [drink, setDrink ] = useState({})

  useEffect(()=>{
    get('search.php?s='+name)
    .then(data => {
      setDrink(data.drinks[0])
    })
    .catch(e => console.log(e))
  }, [])

  const ingredientsKeys = Object.keys(drink).filter(key =>  {
    return key.match(/strIngredient\d/) && drink[key]
  })

  const ingredients = ingredientsKeys.map(key => {
    const ingredient = drink[key]
    const measure = drink["strMeasure" + key.slice(-1)]
    return `${measure ? measure + " - " : ""} ${ingredient}`
  })

  return (
  <DrinkSingle 
  image={drink.strDrinkThumb}
  name={drink.strDrink}
  instructions={drink.strInstructions}
  ingredients = {ingredients}
  />
  )
}