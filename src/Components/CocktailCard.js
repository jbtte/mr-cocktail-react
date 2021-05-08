import Card from 'react-bootstrap/Card'

function CocktailCard ({image, name}) {
  return(
      <Card style={{ width: '18rem' }} className="m-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Text>
            <h3>{name}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default CocktailCard