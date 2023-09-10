import { useEffect, useRef, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [drinks, setDrinks] = useState([]);
  const searchTerm = useRef();

  const API_URL = "https://api.punkapi.com/v2/beers";

  const searchDrink = async (drink) =>{
    const searchURL = API_URL + "?beer_name=" + drink;
    fetchDrinks(searchURL);
  }

  const fetchDrinks = async (url)=>{
    const newDrinks = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
    setDrinks(newDrinks);
  }

  useEffect(()=>{
    fetchDrinks(API_URL);
  },[])

  return (
    <div className='app'>
      <h1>Welcome To PunkDrinks</h1>
      <form action="">
        <input ref={searchTerm} type="search" name="search" id="search" placeholder='Search Drink'/>
        <button type="submit" id="searchBtn" onClick={(e)=> {
          e.preventDefault();
          searchDrink(searchTerm.current.value)
          }}>Search</button>
      </form>
        { drinks.length > 0 ?
            (<div className="card-container">
              { drinks.map((drink) => {
                return (
                <Card drink={drink}/>
              )})}
            </div>) : (<div className='empty'>Nothing here :\</div>)
        }

        <div className="credits">
          <a href="https://muz4mmil.github.io" target='_blank'>- Made by Muzammil ( Click to know more about me )</a>
        </div>
    </div>
  )
}

export default App
