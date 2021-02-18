import React, {useState, useEffect} from 'react';

import {useSelector, useDispatch} from "react-redux";
//actions 
import { fetchWeather } from "./actions/fetchWeather";



function App() {
    //set city
  const [city, setCity] = useState("");

const weatherSelector = useSelector(state => state)
const dispatch = useDispatch();
const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

useEffect(() =>{
  getWeatherInfoAction("paris");
}, {})


const getWeatherInfo = (e) => {
  e.preventDefault();
  if(city === ""){
    console.log("no city to search for")
  }else{
  getWeatherInfoAction(city);
  console.log(weatherSelector.weatherInfo)
  }
};


let details = "";
if(weatherSelector.weatherInfo){
  details = <div className="details">
             <h4>Weather Details</h4>
             <p>
              {weatherSelector.weatherInfo.location.name 
               } <span>
              {weatherSelector.weatherInfo.location.country}
               </span> </p>

      <p>
        {weatherSelector.weatherInfo.current.temp_c}C
        </p>
      <img src =
      {weatherSelector.weatherInfo.current.condition} alt=" weather details" />
      <p>
        {weatherSelector.weatherInfo.current.condition}
      </p>
  </div>
}else{
  details = <p>You need to type a City</p>
}


return(
    <React.Fragment>
   <div className= "App">
    <header>
      <h1>Jonathan WeatherApp</h1>
      <p>Powered By React</p>
    </header>
   </div>

   <main>
     <form onSubmit={getWeatherInfo}>
       <div className="control">
         <input type="text" name="name" placeholder="City to check weather,Ex. Chicago" onChange={e => setCity(e.target.value)}  />
       </div>
         <input type="submit" value="Check Weather" />
      </form>
     {details}
    
    </main>
    </React.Fragment>
);
}

export default App;
