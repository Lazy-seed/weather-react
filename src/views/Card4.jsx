import React from 'react'
import { Col, Row } from 'reactstrap'
import d50 from '../assets/icons/50d.png'
import { BsSun, BsMoon, BsDroplet, BsEye } from 'react-icons/bs'
import { FiWind } from 'react-icons/fi'
import { CiTempHigh } from 'react-icons/ci'
import { dayData } from '../api/data'

export default function Card4() {
    const Data = dayData.list.slice(0, 8);

    return (
        <div className='p-2'>
            <h5>Toady at</h5>
            <Row className='gy-2 mt-3'>
                <Col lg="6" className='pe-0 me-0 d-flex gap-2 '>
                    {
                        Data.slice(0, 4).map((data, index) => {
                            const newDate = new Date(data.dt * 1000)
                            let hour = 0
                            if (newDate.getHours() > 12) {
                                hour = newDate.getHours() - 12 + ' PM'
                            } else {
                                hour = newDate.getHours() + " AM"
                            }
                            return (
                                <div className='p-1  rounded-3 flex-fill d-flex flex-column justify-content-between align-items-center ' key={index}>
                                    <h6>{hour} </h6>
                                    <img src={d50} alt="" width={30} />
                                    <h6 className='mt-2'>{Math.round(data.main.feels_like)}°c</h6>
                                </div>
                            )
                        })
                    }
                </Col>
                <Col lg="6" className='pe-0 me-0 d-flex gap-2 '>
                    {
                        Data.slice(4,8).map((data, index) => {
                            const newDate = new Date(data.dt * 1000)
                            let hour = 0
                            if (newDate.getHours() > 12) {
                                hour = newDate.getHours() - 12 + ' PM'
                            } else {
                                hour = newDate.getHours() + " AM"
                            }
                            return (
                                <div className='p-1  rounded-3 flex-fill d-flex flex-column justify-content-between align-items-center ' key={index}>
                                    <h6>{hour} </h6>
                                    <img src={d50} alt="" width={30} />
                                    <h6 className='mt-2'>{Math.round(data.main.feels_like)}°c</h6>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </div>
    )
}
