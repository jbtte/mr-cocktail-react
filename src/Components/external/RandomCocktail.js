import RandomCard from './RandomCard'

export default function RandomCocktail () {
  const cocktailDb = "https://www.thecocktaildb.com/api/json/v1/1/"
  const cocktailEndPoint = "random.php"
  
  return (
  <div className = "d-flex flex-wrap ">
    <RandomCard dbUrl = {cocktailDb} endPoint = {cocktailEndPoint}/>
    <RandomCard dbUrl = {cocktailDb} endPoint = {cocktailEndPoint}/>
    <RandomCard dbUrl = {cocktailDb} endPoint = {cocktailEndPoint}/>
    <RandomCard dbUrl = {cocktailDb} endPoint = {cocktailEndPoint} />
  </div>)
}