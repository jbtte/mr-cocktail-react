import useFetch from './useFetch.js'
import { useEffect, useState } from 'react'
import CocktailCard from './CocktailCard'
import Loader from './Loader'

export default function FavoriteCocktail () {
  const cocktailDb = "http://127.0.0.1:3001/"
  const cocktailEndPoint = "cocktails"
  const [ cocktailsList, setCocktailsList ] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const { get } = useFetch(cocktailDb)
  
  useEffect(() => {
    get(cocktailEndPoint)
    .then(data => {
      setCocktailsList(value => value = data)
    })
    .catch(e => console.log(e))
    .finally(() => setIsLoading(false))

    return () => {
      console.log("Once before component unmounted");
    }
  }, [])
    
  return (<div className = "d-flex justify-content-around">
    {isLoading ? <Loader /> :  cocktailsList.map(cocktail =>{
      return (
          <CocktailCard  name={cocktail.name}  key={cocktail._id}/>)
      } )
    }
    </div>)
}