import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import useFetch from '../helpers/useFetch' 
import { useEffect, useState } from 'react'
import CocktailCard from '../helpers/CocktailCard'
import Loader from '../helpers/Loader'

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    }
  };

  const imageUrl = (buffer) => {
    if (!buffer){
      return null
    }
    const url =  btoa(new Uint8Array(buffer).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
  }, ''))
  return `data:image/jpeg;base64, ${url}`
  }
    
  return (<div className = "d-flex justify-content-around">
    <Carousel responsive={responsive} ssr={true} infinite={true} deviceType={"desktop"}>
        {isLoading ? <Loader /> :  cocktailsList.map(cocktail =>{
          return (<div>
            <Link to={`/favorite/${cocktail._id}`}>
              <CocktailCard  
              name={cocktail.name}  
              key={cocktail._id}
              image={cocktail.image ? imageUrl(cocktail.image.data) : ""} />
            </Link>
          </div>)
          })
        }
    </Carousel>
  </div>)
}
 