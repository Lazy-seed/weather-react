import { useEffect, useState } from 'react';
import './App.scss';
import './assets/personal.scss';
import Home from './views/Home';
import axios from 'axios';
import { dayData, weatherData } from './api/data';

// icons
import { IoLocationOutline } from 'react-icons/io5'
import { BiSearch } from 'react-icons/bi'
import { getData } from './api/Apis';

function App() {
  const [W_data, setW_data] = useState('')
  const [Forecast_data, setForecast_data] = useState('')
  const [Air_data, setAir_data] = useState('')
  const [Srch_val, setSrch_val] = useState('mumbai')
  const [LAT, setLAT] = useState(19.0785451)
  const [LON, setLON] = useState(72.878176)
  const [showLoader, setshowLoader] = useState(true)
  const [showError, setshowError] = useState(false)


  const api_key = '244bca3376d5c5818bc33c811688c2fb'
  const weather_uri = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${api_key}`
  const air_uri = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${LAT}&lon=${LON}&units=metric&appid=${api_key}`
  const day_uri = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&units=metric&appid=${api_key}`

  useEffect(() => {
    weather_fun()
    forecast_fun()
    air_fun()
  }, [LAT,LON])


  const handle_search = async () => {
    await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${Srch_val}&limit=1&appid=244bca3376d5c5818bc33c811688c2fb`).then((res) => {
      setLAT(res.data[0].lat); setLON(res.data[0].lon)
      console.log("handle srch");
    }).catch((err) => {
      console.log(err);
      setshowError(true)

    })
  }
  const weather_fun = async () => {
    setshowLoader(true)
    await axios.get(weather_uri).then((res) => {
      setW_data(res.data)
      setshowLoader(false)
    }).catch((err) => {
      console.log(err);
    })
  }
  const forecast_fun = async () => {
    await axios.get(day_uri).then((res) => {
      setForecast_data(res.data)
      console.log(res.data);
      setshowError(false)
    }).catch((err) => {
      console.log(err);
      setshowError(true)
    })
  }
  const air_fun = async () => {
    await axios.get(air_uri).then((res) => {
      setAir_data(res.data)
      console.log(res.data);
      setshowError(false)
    }).catch((err) => {
      console.log(err);
      setshowError(true)
    })
  }




  // get location
  function getLocation() {
    navigator.geolocation.getCurrentPosition(function (location) {
      console.log(location.coords.latitude);
      console.log(location.coords.longitude);
      setLAT(location.coords.latitude); setLON(location.coords.longitude)

    });
  }

if (!Forecast_data) {
  return <div className="cont"><div className="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div></div>  
  
}




  return (
    <div className="App">
      <nav className="container-fluid d-flex justify-content-between  align-items-center  px-5 p-4  ">
        <a className="navbar-brand fs-1 fw-bolder text-white" href="#">WEATHER</a>


        <div className="input-container position-relative ">
          <input required="" placeholder="Mumbai" className='text-black' id="srch_val" type="text" onChange={(e) => setSrch_val(e.target.value)} />
          <button className="invite-btn" type="button" onClick={handle_search}>
            Search
          </button>

          {/* <div className='srch_result_box  position-absolute bottom-0'>
            <ul>
              <li>zdd</li>
              <li>zdd</li>
              <li>zdd</li>
            </ul>
          </div> */}
        </div>

        <button onClick={getLocation} className='btn btn-primary rounded-5 d-flex justify-content-center align-items-center fw-bold py-2 px-4'> <IoLocationOutline size={20} className='me-1 ' /> <h5 className=' '>Current Location</h5></button>
      </nav>

      { showError ? <h3 className='text-center'>invalid city name</h3>:''}
      {
        showLoader ? <div className="cont"><div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div></div>
          :
          <Home W_data={W_data}  Forecast_data={Forecast_data} Air_data={Air_data}/>
      }

    </div>
  );
}

export default App;
