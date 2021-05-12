import { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import useFetch from '../helpers/useFetch'
import ModalSaved from '../helpers/ModalSaved'


export default function AddImage () {
  const { post , get} = useFetch('http://127.0.0.1:3001/cocktails/')
  const [ showModal, setShowModal ] = useState(false)
  const [cocktail, setCocktail ] = useState()
  const {id} = useParams()


  
  const modal = (bool) => {
    setShowModal(bool)
  }

  useEffect(()=>{
    get(id)
    .then(data => {
      setCocktail(data)
    })
    .catch(e => console.log(e))
  }, [])
  

  return (null)
}