import { useState, useEffect } from "react";
import './App.css'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";


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
      <Navbar city={city} setCity={setCity} fetchWeather={fetchWeather}/>
      <WeatherCard data={data} loading={loading}/>
    </>
  )
}

export default App
