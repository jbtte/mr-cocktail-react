import './helper.css';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

import AddDose from '../favorite/AddDose'


import cocktailImage from '../../Images/cocktailImage.jpg'
import backgroundBar from '../../Images/background-bar.jpeg'

export default function SingleDrink ({image, name, ingredients, instructions, id}) {
 const style = {
    height: "380px",
    width: "280px",
    position: "absolute",
    left: "41%",
    top: "18%",
    zIndex: "1"
  }

  const instructionTemplate = () => {
    return (<>
      <Card.Title>Instructions</Card.Title>
      <Card.Body>{instructions}</Card.Body>
    </>)
  }

  return (<>
  <div>
    <Image src={backgroundBar} fluid style={{height: "400px", width: "1500px"}} className='bg-image'/>
    <Image src={image || cocktailImage} thumbnail style={style}/>
  </div>
  <div className="mt-4 row justify-content-between">
    <Card className="col-4 border-0 " bg={'dark'} text={"white"}>
      <Card.Title>Ingredients</Card.Title>
      <Card.Body>
        <ul> 
          {ingredients && ingredients.map((ingredient, index) =>{
            return <li key={index}>{ingredient}</li>
          })}
        </ul>
      </Card.Body>
    </Card>
  <div className="mt-5 pt-5 col-4">
    <h1 className="text-center font-cursive">{name}</h1>
  </div>
    <Card className="col-4 border-0 p-4 card-dark-background " bg={'dark'} text={"white"}>
          {instructions ? instructionTemplate() : < AddDose cocktail={id} />}
    </Card>
  </div>

 </> );
}
