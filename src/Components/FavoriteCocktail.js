import useFetch from './useFetch.js'
import { useEffect, useState } from 'react'

export default function FavoriteCocktail () {
  const cocktailDb = "http://127.0.0.1:3001/"
  const cocktailEndPoint = "cocktails"
  const [ cocktails, setCocktails ] = useState()

  const { get } = useFetch(cocktailDb)

  useEffect(() => {
    get(cocktailEndPoint)
    .then(data => {
      setCocktails(data)
      console.log(data)  
    })
    .catch(e => console.log(e))
  }, [])

  
  return (null)
}