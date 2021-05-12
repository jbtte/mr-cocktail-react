import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import logo from '../Images/logo.png'

function NavegationBar () {
  return ( <>
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
    <Link to="/" >
      <div className=" flex-grow-1 mx-4">
        <div >
      <Navbar.Brand href="#home" className = "d-flex">
        <img
          alt=""
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        /> {' '}
        <h5 className="mx-3 mt-2">Cocktail Party</h5>
      </Navbar.Brand>
        </div>
      </div>
      </Link>

      <Link to="/favorites">
      <div className="mx-4">
      <Button variant="outline-warning">Create your Cocktail</Button>{' '}
      </div>
      </Link>
    </Navbar>
</>);
}

export default NavegationBar