import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import logo from '../Images/logo.png'

function NavegationBar () {
  return ( <>
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
    <Link to="/">
      <div className=" flex-grow-1 ">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        /> {' '}
        Cocktail Party
      </Navbar.Brand>
      </div>
      </Link>
      <div>
      <Form inline className="d-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light" className="mx-2">Search</Button>
        </Form>
      </div>
      <div className="mx-4">
      <Button variant="outline-warning">Create your Cocktail</Button>{' '}
      </div>
    </Navbar>
</>);
}

export default NavegationBar