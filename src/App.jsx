import { useEffect, useState } from 'react'
import './App.css'
import Highlights from './components/Highlights'
import Temprature from './components/Temprature'

function App() {

  const [city, setCity] = useState("Jodhpur");
  const [weatherData, setWeatherData] = useState(null);

 
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=b99d78c43164498bbda120418242804&q=${city}&aqi=no`

  useEffect(()=>{
    fetch(apiURL)
  .then((response)=>{
    if(!response.ok){
      throw new Error("Error")
    }
    return response.json();
  })
  .then((data)=>{
    console.log(data);
    setWeatherData(data);
  })
  .catch((e)=>{
    console.log(e);
  }
  )
  },[city])

  

  return (
    <div className='bg-[#1F213A] h-screen flex justify-center align-top'>

      <div className='w-1/5 mt-40 h-1/3'>
        {weatherData && 
        <Temprature
        setCity={setCity}
        stats={{
          temp:weatherData.current.temp_c,
          condition:weatherData.current.condition.text,
          isDay:weatherData.current.is_day,
          location:weatherData.location.name,
          time:weatherData.location.localtime
        }}

        />}
      </div>

      <div className='grid w-1/3 grid-cols-2 gap-6 p-10 mt-40 h-1/3'>
        <h2 className='col-span-2 text-2xl text-slate-200'>Today's Highlights</h2>

        {
          weatherData &&
          (
            <>
              <Highlights
              stats={{
                title:"Wind Status",
                value:weatherData.current.wind_kph,
                unit:"Kph",
                direction:weatherData.current.wind_dir
              }}
              />
              <Highlights
              stats={{
                title:"Humidity",
                value:weatherData.current.humidity,
                unit:"%",
              }}
              />
              <Highlights
              stats={{
                title:"Visibilty",
                value:weatherData.current.vis_km,
                unit:"Km",
              }}
              />
              <Highlights
              stats={{
                title:"Air Pressure",
                value:weatherData.current.pressure_in,
                unit:"in",
              }}
              />
            </>
          )
        }


      </div>
    </div>
  )
}

export default App
