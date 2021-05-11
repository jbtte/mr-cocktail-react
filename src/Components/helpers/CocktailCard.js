import Card from 'react-bootstrap/Card'
import cocktailImage from '../../Images/cocktailImage.jpg'

function CocktailCard ({image, name}) {

  const style = {
    height: "300px"
  }

  return(
      <Card style={{ width: '18rem' }} className="m-3">
        <Card.Img variant="top" src={image || cocktailImage} style={style} />
        <Card.Body>
          <Card.Text>
            <h3>{name}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default CocktailCard