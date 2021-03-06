import { Link } from "react-router-dom";
import CocktailCard from '../helpers/CocktailCard'
import useFetch from '../helpers/useFetch.js'
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
    })
    .catch(e => console.log(e))
  }, []) 

  return(<>
    <Link to={`/random/${name}`}>
      <CocktailCard image={image} name={name} />
    </Link>
 </> )
}

export default RandomCard