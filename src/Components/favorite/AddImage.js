import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useFetch from '../helpers/useFetch'
import ModalSaved from '../helpers/ModalSaved'


export default function AddImage () {
  const { post , get} = useFetch('http://127.0.0.1:3001/')
  const [ showModal, setShowModal ] = useState(false)
  
  const modal = (bool) => {
    setShowModal(bool)
  }

  useEffect(()=>{}, [])
  
  // const handleDrinkSubmit = (event) => {
  //   event.preventDefault()
  //   post('cocktails?name='+ drinkName)
  //   .then(data => {
  //     createDose(data._id)
  //     setDrinkName('')
  //     setMeasure('')
  //     setIngredientChosen('')
  //     setReturnMessage(data.message)
  //     setShowModal(true)
  //   })
  //   .catch( e => console.log(e))
  // }

  // const handleIngredientSelect = (event) => {
  //   setIngredientChosen(event.target.value)
  // }
  
  // return (<>
  //   <Card className="border-0 col-5">
  //     <Form>
  //       <Form.Group controlId="formBasicName">
  //         <Form.Label>Drink Name</Form.Label>
  //         <Form.Control 
  //         type="text" 
  //         placeholder="Enter drink name" 
  //         value={drinkName} 
  //           onChange={e =>setDrinkName(e.target.value)}/>
  //       </Form.Group>
  //       <Form.Group controlId="formBasicName">
  //         <Form.Label>Measure</Form.Label>
  //         <Form.Control 
  //         type="text" 
  //         placeholder="Enter the quantity" 
  //         value={measure} 
  //           onChange={e =>setMeasure(e.target.value)}/>
  //       </Form.Group>
  //       <Form.Group controlId="controlSelect">
  //         <Form.Label>Ingredient</Form.Label>
  //         <Form.Control as="select" onChange={handleIngredientSelect}>
  //         {Object.keys(allIngredients).map((keyName, i) => {
  //           return <option value={allIngredients[keyName]} >{keyName}</option>
  //         })
  //         }
  //         </Form.Control>
  //       </Form.Group>
  //       <Button variant="primary" type="submit" className="mt-2" onClick={handleDrinkSubmit}>
  //         Create
  //       </Button>
  //     </Form>
  //   </Card>
  //   {showModal && <ModalSaved name={returnMessage} modal={modal} />}
  // </>)
  return (null)
}