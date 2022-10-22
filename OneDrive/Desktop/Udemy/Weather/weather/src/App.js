import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  const apiKey="a50a8d5bf955b09ffdc936b6bf6fccc3"
const[data, setData] = useState({})
const[inputCity, setInputCity] = useState("")

const getWeatherDetails = (cityName) =>{
  if(!cityName) return
  const apiURL= "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=" +apiKey
  axios.get(apiURL).then((res) =>{
    console.log("response", res.data)

    setData(res.data)
  }
  ).catch((err)=> {
    console.log("err",err)
  })
  }

  const handleChangeInput =(e) => {
    setInputCity(e.target.value)
  }

  const searchFn= () =>{
    getWeatherDetails(inputCity)
  }
  

  return (
  <div className="col" >
  <div className="weatherBackground">
<h1 className='text'>
Weather App
</h1>
<div className='d-grid gap-3 col-4 mt-4'>
<input type="text" className='form-control' onChange={handleChangeInput} />
<button className='btn btn-primary' type="button" onClick={searchFn}> Search </button>
  </div>
  </div>

  {Object.keys(data).length>0 &&
  <div className='col text-center mt-5'>
<div className='shadow rounded resultBox'>
  <img className='imageshit' src='https://cdn-icons-png.flaticon.com/512/3771/3771274.png' /> {/*make these icons dynamic according to temperature ranges*/}
<h1 className='city'> {
  data?.name
}</h1>

<h2 className='temperature'>{Math.floor((data?.main?.temp)-273.15)}°C</h2>
</div>
  </div>}
  </div>  
  );
}

export default App;
