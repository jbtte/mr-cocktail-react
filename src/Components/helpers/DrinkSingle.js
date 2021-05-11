import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

import cocktailImage from '../../Images/cocktailImage.jpg'
import backgroundBar from '../../Images/background-bar.jpeg'

export default function SingleDrink ({image, name, ingredients, instructions}) {
 const style = {
    height: "380px",
    width: "auto",
    position: "absolute",
    left: "41%",
    top: "18%",
    zIndex: "1"
  }
  return (<>
  <div>
    <Image src={backgroundBar} fluid style={{height: "400px", width: "1500px"}} />
    <Image src={image || cocktailImage} thumbnail style={style}/>
  </div>
  <div className="mt-4 row justify-content-between">
    <Card className="col-4 border-0">
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
    <h3 className="text-center">{name}</h3>
  </div>
    <Card className="col-4 border-0">
    <Card.Title>Instructions</Card.Title>
      <Card.Body>{instructions}</Card.Body>
    </Card>
  </div>

 </> );
}
