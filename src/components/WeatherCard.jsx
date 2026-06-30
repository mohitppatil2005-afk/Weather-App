function WeatherCard({data, loading}){

    return(
       <>
        {loading && <p>Loading...</p>}
        {data && <p>City={data.name}</p>}
        {data && <p>Temperature={data.main.temp}</p>}
        {data && <p>Humidity={data.main.humidity}</p>}
        {data && <p>Wind Speed={data.wind.speed}</p>}
        {data && <p>Description={data.weather[0].description}</p>}
       </>
    )
}
export default WeatherCard