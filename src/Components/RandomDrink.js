import {useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import useFetch from './useFetch'

import SingleDrink from './SingleDrink'

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


  return (
  <SingleDrink 
  image={drink.strDrinkThumb}
  name={drink.strDrink}
  instructions={drink.strInstructions}
  />
  )
}