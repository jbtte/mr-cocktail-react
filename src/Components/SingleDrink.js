import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

import cocktailImage from '../Images/cocktailImage.jpg'

export default function SingleDrink ({image, name, ingredients, instructions}) {
 const style = {
    height: "380px",
    width: "auto",
    position: "absolute",
    left: "37%",
    top: "15%",
    zIndex: "1"
  }
  return (<>
  <div>
    <Image src="https://picsum.photos/id/1060/1500/300/" fluid />
    <Image src={image || cocktailImage} thumbnail style={style}/>
  </div>
  <div className="mt-4 row justify-content-between">
    <Card className="col-4 border-0">
      <Card.Title>Ingredients</Card.Title>
      <Card.Body>
        <ul> 
          {ingredients && ingredients.map((ingredient, index) =>{
            <li key={index}>{ingredient}</li>
          })}
        </ul>
      </Card.Body>
    </Card>
    <Card className="col-4 border-0">
    <Card.Title>Instructions</Card.Title>
      <Card.Body>{instructions}</Card.Body>
    </Card>
  </div>
  <div className="mt-5">
    <h3 className="text-center">{name}</h3>
  </div>

 </> );
}
