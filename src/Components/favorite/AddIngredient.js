import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useFetch from '../helpers/useFetch' 
import ModalSaved from '../helpers/ModalSaved'

export default function AddIngredient () {
  const { post } = useFetch('http://127.0.0.1:3001/ingredients?name=')
  const [ingredient, setIngredient] = useState()
  const [ showModal, setShowModal ] = useState(false)

  const modal = (bool) => {
    setShowModal(bool)
  }
  
  const handleIngredientSubmit = (event) => {
    event.preventDefault()
    post(ingredient)
    .then(data => {
      setIngredient("")
      console.log(data)
      modal(true)
    })
    .catch( e => console.log(e))
  }

  

  return (<>
    <Card className="border-0 col-5 p-4" bg={'dark'} text={"white"}>
    <Form>
        <Form.Group controlId="formBasicIngredientName">
          <Form.Label>Ingredient Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter ingredient name" 
            value={ingredient} 
            onChange={e =>setIngredient(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2" onClick={handleIngredientSubmit}>
          Create
        </Button>
      </Form>
    </Card>
  {showModal && <ModalSaved name={"Ingredient"} modal={modal} />}
  </>)
}