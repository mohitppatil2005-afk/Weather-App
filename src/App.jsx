import { useState, useEffect } from "react";
import './App.css'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function SearchBar({city, setCity}){
  return(
    <input
      placeholder="Enter City"
      value={city}
      onChange={(e)=> setCity(e.target.value)}
    />
  )
}

function App() {
  
  const [city, setCity]=useState("");
  const [data, setData]=useState(null);
  const [loading, setLoading]=useState(false);

  async function fetchWeather(city){

    if (!city.trim()) {
      return;
    }
    setLoading(true);
    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response= await fetch(url);
      if(!response.ok){
        const errorData = await response.json();
        console.log(errorData);
        throw new Error(errorData.message);
      }
      console.log(response);
      const weatherData=await response.json();
      setCity("");
      setData(weatherData);
    }
    catch(error){
      console.log(error);
      setData(null);
    }
    finally{
      setLoading(false);
    }

  }

  return (
    <>
      <SearchBar city={city} setCity={setCity}/>
      <button onClick={()=> fetchWeather(city)}>Search</button>
      {loading && <p>Loading...</p>}
      {data && <p>City={data.name}</p>}
      {data && <p>Temperature={data.main.temp}</p>}
      {data && <p>Humidity={data.main.humidity}</p>}
      {data && <p>Wind Speed={data.wind.speed}</p>}
      {data && <p>Description={data.weather[0].description}</p>}
    </>
  )
}

export default App
