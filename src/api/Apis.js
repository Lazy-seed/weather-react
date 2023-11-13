import axios from "axios"




const URI='https://api.openweathermap.org/data/2.5/weather?lat=19.0144&lon=72.8479&units=metric'
const api_key='244bca3376d5c5818bc33c811688c2fb'


export const getData = async() =>{
   const data = await axios.get(`${URI}&appid=${api_key}`).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err);
    })
}
