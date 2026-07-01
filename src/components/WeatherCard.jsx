import './WeatherCard.css';

function WeatherCard({data, loading}){

    if(loading){
        <p>Loading Weather...</p>
    }

    return(
       <>
            <div className="weather-card">
                
                <div className='weather-info-1'>
                    <p className='city-name'>{ data && data.name}</p>

                    {data &&
                    <img className='weather-icon'
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                        alt={data.weather[0].description}
                    />}

                    { data && <p className='city-temp'>{Math.round(data.main.temp)}°C</p>}
                </div>

                <div className="weather-info-2">

                    <div className="mini-card">
                        {data && <p>Humidity</p>}
                        <p>{ data && data.main.humidity}</p>
                    </div>

                    <div className="mini-card">
                        {data && <p>Wind Speed </p>}
                        <p>{ data && data.wind.speed}</p>
                    </div>

                    <div className="mini-card">
                        {data && <p>Description</p>}
                        <p>{ data && data.weather[0].description}</p>
                    </div>
                </div>

            </div>
       </>
    )
}
export default WeatherCard