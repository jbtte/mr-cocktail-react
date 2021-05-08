import CocktailCard from './CocktailCard'
import useFetch from './useFetch.js'
import { useEffect, useState } from "react"

function RandomCard ({dbUrl, endPoint}) {
  const { get } = useFetch(dbUrl)
  const [image, setImage] = useState()
  const [name, setName ] = useState()
  
  useEffect(()=>{
    get(endPoint)
    .then(data => {
      setImage(data.drinks[0].strDrinkThumb)
      setName(data.drinks[0].strDrink)
      console.log(name)
    })
    .catch(e => console.log(e))
  }, []) 

  return(
      <CocktailCard image={image} name={name} />
  )
}

export default RandomCard