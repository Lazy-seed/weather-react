import React from 'react'
import d50 from '../assets/icons/50d.png'
import { IoLocationOutline } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'

export default function Card1({ W_data}) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    


    return (
        <div className='p-2'>
            <h5>Now</h5>
            <div className='d-flex justify-content-around align-items-center '>
                <h1 className='display-3'>{Math.round(W_data.main.temp)}°c</h1><img src={d50} alt="" width={80} />
            </div>
            <div className='mt-1'>
                <h6>{W_data.weather[0].main} </h6>
                <hr />
                <h5><IoLocationOutline size={20} className='me-2' /> {days[date.getDay()]}   {date.getDate()},{months[date.getMonth()]}</h5>
                <h5><SlCalender size={18} className='me-2' /> {W_data.name},{W_data.sys.country} </h5>
            </div>

        </div>
    )
}
