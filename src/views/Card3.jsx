import React, { useState } from 'react'
import d04 from '../assets/icons/04d.png'
import { BsCloudsFill, BsCloudSunFill } from 'react-icons/bs'

export default function Card3({Forecast_data}) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(Forecast_data);

    const Data = Forecast_data;
    let DayList = []
    function daysss() {
        const nowData = new Date(Data.list[0].dt * 1000)
        let prevDate = new Date(Data.list[0].dt * 1000).toDateString()
        Data.list.forEach(ele => {
            const newDate = new Date(ele.dt * 1000).toDateString()
            if (DayList.length < 5) {
                if (prevDate !== newDate) {
                    prevDate = newDate
                    DayList.push(ele)
                }
            }
        });
    }

    daysss()

    return (
        <div className='p-2'>
            <h5 className=''>5 Days forecast</h5>
            <hr />
            <div className='d-flex flex-column mt-4 gap-2'>

                {
                    DayList.map((data, index) => {

                        const date = new Date(data.dt * 1000)
                        return (
                            < div className='d-flex justify-content-between align-items-center ' key={index} >
                                <div className='d-flex align-items-center  gap-2'><img src={d04} alt="" width={30} />
                                    <h6 className='m-0'>{Math.round(data.main.feels_like)} °c</h6>
                                    <h6 className='m-0 ms-5'>{date.getDate()} Mar</h6>
                                </div>
                                <h6 className='m-0'>{days[date.getDay()]}</h6>
                            </div>
                        )
                    }
                    )
                }
            </div>

        </div >
    )
}
