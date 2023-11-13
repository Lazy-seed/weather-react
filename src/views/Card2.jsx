import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import d50 from '../assets/icons/50d.png'
import { BsSun, BsMoon, BsDroplet, BsEye } from 'react-icons/bs'
import { FiWind } from 'react-icons/fi'
import { CiTempHigh } from 'react-icons/ci'

export default function Card2({ W_data,Air_data}) {
    const rise = new Date((W_data.sys.sunrise) * 1000);
    const fall = new Date((W_data.sys.sunset) * 1000);



    return (
        <div className='p-2 pt-0'>
            <div>
                <Row className='gy-4 match-height'>
                    <Col md="6">
                        <Card className=' '>
                            <CardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className='fw-light'>Air Quality Index</h6>
                                    <h6 className='fw-light'>Now</h6>
                                </div>
                                <div className='d-flex justify-content-between align-items-center text-center mt-4'>
                                    <img src={d50} alt="" width={40} />
                                    <div>
                                        <h6>PM25</h6>
                                        <h5>{Math.round(Air_data.list[0].components.pm2_5 ) }</h5>
                                    </div>
                                    <div>
                                        <h6>CO</h6>
                                        <h5>{Math.round(Air_data.list[0].components.co ) }</h5>
                                    </div>
                                    <div>
                                        <h6>SO2</h6>
                                        <h5>{Math.round(Air_data.list[0].components.so2 ) }</h5>
                                    </div>
                                    <div>
                                        <h6>O3</h6>
                                        <h5>{Math.round(Air_data.list[0].components.o3 ) }</h5>
                                    </div>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className=' '>
                            <CardBody>
                                <h6 className='fw-light'>Sunrise & Sunset</h6>

                                <div className='d-flex justify-content-between align-items-center  mt-4'>
                                    <div className='d-flex justify-content-start align-items-center gap-3' >
                                        <BsSun className='fs-1' />
                                        <div>
                                            <h6>Sunrise</h6>
                                            <h5>{rise.toLocaleTimeString().slice(0,4)}   {rise.toLocaleTimeString().slice(8,10)}</h5>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-center gap-3' >
                                        <BsMoon className='fs-1' />
                                        <div>
                                            <h6>Sunrise</h6>
                                            <h5>{fall.toLocaleTimeString().slice(0,4)}   {fall.toLocaleTimeString().slice(8,10)}</h5>

                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" md="3">
                        <Card className=' '>
                            <CardBody>
                                <h6 className='fw-light'>Humidity</h6>
                                <div className='d-flex justify-content-between align-items-center mt-3' >
                                    <BsDroplet className='fs-3' />
                                    <h4 className='m-0'>{W_data.main.humidity}%</h4>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" md="3">
                        <Card className=' '>
                            <CardBody>
                                <h6 className='fw-light'>Humidity</h6>
                                <div className='d-flex justify-content-between align-items-center mt-3' >
                                    <FiWind className='fs-3' style={{ minWidth: "20%" }} />
                                    <h4 className='m-0'>{W_data.main.pressure}hPa</h4>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" md="3">
                        <Card className=' '>
                            <CardBody>
                                <h6 className='fw-light'>Visibility</h6>
                                <div className='d-flex justify-content-between align-items-center mt-3' >
                                    <CiTempHigh className='fs-3' />
                                    <h4 className='m-0'>{W_data.visibility/1000}km</h4>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" md="3">
                        <Card className=' '>
                            <CardBody>

                                <h6 className='fw-light'>Feels Like</h6>
                                <div className='d-flex justify-content-between align-items-center mt-3' >
                                    <BsEye className='fs-3' />
                                    <h4 className='m-0'>  {Math.round(W_data.main.feels_like)}°c</h4>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
