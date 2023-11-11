import React from 'react'
import d50 from '../assets/icons/50d.png'
import { IoLocationOutline } from 'react-icons/io5'
import {SlCalender} from 'react-icons/sl'

export default function Card1() {
    return (
        <div className='p-2'> 
            <h5>Now</h5>
            <div className='d-flex justify-content-around align-items-center '>
                <h1 className='display-3'>-41°c</h1><img src={d50} alt="" width={80} />
            </div>
            <div className='mt-1'>
            <h6>Fog </h6>
                <hr />
                <h5><IoLocationOutline size={20} className='me-2'/> Thursday 2,Mar</h5>
                <h5><SlCalender size={18} className='me-2'/> London,LO </h5>
            </div>

        </div>
    )
}
