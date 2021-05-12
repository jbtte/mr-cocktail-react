import {useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import useFetch from '../helpers/useFetch' 

import DrinkSingle from '../helpers/DrinkSingle'
import AddDose from './AddDose'


export default function DrinkFavorite () {
  const {id} = useParams()
  const {get} = useFetch('http://127.0.0.1:3001/cocktails/')
  const [drink, setDrink ] = useState({})

  useEffect(()=>{
    get(id)
    .then(data => {
      setDrink(data)
      console.log(data)
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

  const imageUrl = (buffer) => {
    if (!buffer){
      return null
    }
    const url =  btoa(new Uint8Array(buffer).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
  }, ''))
  return `data:image/jpeg;base64, ${url}`
  }

  return (<>
  <div>
    <DrinkSingle 
    image={drink.image ? imageUrl(drink.image.data) : "" }
    name={drink.name}
   id = {id}
   ingredients={ingredients}
    />
  </div>
 </> )
}