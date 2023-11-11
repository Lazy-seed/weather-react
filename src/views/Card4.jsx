import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import d50 from '../assets/icons/50d.png'
import { BsSun, BsMoon, BsDroplet, BsEye } from 'react-icons/bs'
import { FiWind } from 'react-icons/fi'
import { CiTempHigh } from 'react-icons/ci'

export default function Card4() {
    return (
        <div className='p-2'>
            <h5>Toady at</h5>
            <Row className='gy-2 mt-3'>
                <Col lg="6"  className='pe-0 me-0'>
                    <div className='d-flex gap-2 '>
                        {
                            [1, 2, 3, 4].map(() => (
                                <div className='p-1  rounded-3 flex-fill d-flex flex-column justify-content-between align-items-center '>
                                    <h6>6 AM</h6>
                                    <img src={d50} alt="" width={30} />
                                    <h6 className='mt-2'>-41°c</h6>
                                </div>
                            ))
                        }

                    </div>
                </Col>
                <Col lg="6"  className='pe-0 me-0'>
                    <div className='d-flex gap-2 '>
                        {
                            [1, 2, 3, 4].map(() => (
                                <div className='p-1  rounded-3 flex-fill d-flex flex-column justify-content-between align-items-center '>
                                    <h6>6 AM</h6>
                                    <img src={d50} alt="" width={30} />
                                    <h6 className='mt-2'>-41°c</h6>
                                </div>
                            ))
                        }

                    </div>
                </Col>
            </Row>
        </div>
    )
}
