import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'


export default function ModalSaved ({name, modal}) {
  const [ show, setShow ] = useState(true)
  const hideModal = () => {
    modal(false)
}
  

  return (
    <Modal show={show}  onHide={hideModal}>
      <Modal.Body>
        <p>{name} was saved</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" show={show} onClick = {hideModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}