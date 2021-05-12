import AddIngredient from './AddIngredient'
import AddDrink from './AddDrink'
import Image from 'react-bootstrap/Image'
import backgroundBar from '../../Images/background-bar.jpeg'

export default function AddCocktail () {

  const style = {
   position: "absolute",
    top: "35%",
    zIndex: "1",
    width: "87%",
  }
  
  return (<>
  <div>
  <Image src={backgroundBar} fluid style={{height: "400px", width: "1500px"}} className='bg-image'/>
  </div>
  <div className = "row mt-5 justify-content-around" style={style}>
    <AddDrink />
    <AddIngredient />
  </div> 
  </>)
}