import './Navbar.css'

function Navbar({city, setCity, fetchWeather}){
  return(
    <>
        <div className="heading">
            Weather App
        </div>

        <div className="search-background">
            <input
                className="search-input"
                placeholder="Enter City"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
            />
            <button onClick={()=> fetchWeather(city)} className="search-button">
                Search
            </button>
        </div>
    </>
  )
}
export default Navbar