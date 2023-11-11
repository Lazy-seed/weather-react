import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import d50 from '../assets/icons/50d.png'
import { BsSun, BsMoon, BsDroplet,BsEye } from 'react-icons/bs'
import { FiWind} from 'react-icons/fi'
import { CiTempHigh} from 'react-icons/ci'

export default function Card2() {
    return (
        <div className='p-2'>
            <h5>Now</h5>

            <div>
                <Row className='gy-4 match-height'>
                    <Col md="6">
                        <Card className='bg-dark'>
                            <CardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className='fw-light'>Air Quality Index</h6>
                                    <h6 className='fw-light'>Now</h6>
                                </div>
                                <div className='d-flex justify-content-between align-items-center text-center mt-4'>
                                    <img src={d50} alt="" width={40} />
                                    <div>
                                        <h6>PM25</h6>
                                        <h5>1.320</h5>
                                    </div>
                                    <div>
                                        <h6>PM25</h6>
                                        <h5>1.320</h5>
                                    </div>
                                    <div>
                                        <h6>PM25</h6>
                                        <h5>1.320</h5>
                                    </div>
                                    <div>
                                        <h6>PM25</h6>
                                        <h5>1.320</h5>
                                    </div>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className='bg-dark'>
                            <CardBody>
                                <h6 className='fw-light'>Sunrise & Sunset</h6>

                                <div className='d-flex justify-content-between align-items-center  mt-4'>
                                    <div className='d-flex justify-content-start align-items-center gap-3' >
                                        <BsSun className='fs-1' />
                                        <div>
                                            <h6>Sunrise</h6>
                                            <h5>7:23 AM</h5>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-center gap-3' >
                                        <BsMoon className='fs-1' />
                                        <div>
                                            <h6>Sunrise</h6>
                                            <h5>7:23 AM</h5>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" md="3">
                        <Card className='bg-dark'>
                            <CardBody>
                                <h6 className='fw-light'>Humidity</h6>
                                <div className='d-flex justify-content-between align-items-center mt-3' >
                                    <BsDroplet className='fs-3' />
                                    <h4 className='m-0'>70%</h4>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" md="3">
                        <Card className='bg-dark'>
                           <CardBody>
                                <h6 className='fw-light'>Humidity</h6>
                                <div className='d-flex justify-content-between align-items-center mt-3' >
                                    <FiWind className='fs-3' style={{minWidth:"20%"}}/>
                                    <h4 className='m-0'>1011hPa</h4>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" md="3">
                        <Card className='bg-dark'>
                           <CardBody>
                           <h6 className='fw-light'>Visibility</h6>
                                <div className='d-flex justify-content-between align-items-center mt-3' >
                                    <CiTempHigh className='fs-3' />
                                    <h4 className='m-0'>0.4km</h4>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" md="3">
                        <Card className='bg-dark'>
                           <CardBody>
                               
                                <h6 className='fw-light'>Feels Like</h6>
                                <div className='d-flex justify-content-between align-items-center mt-3' >
                                    <BsEye className='fs-3' />
                                    <h4 className='m-0'>-41°c</h4>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
