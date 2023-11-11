import React, { useEffect } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import axios from "axios"

export default function Home() {

const URI='https://api.openweathermap.org/data/2.5/weather?lat=19.0144&lon=72.8479&units=metric'
const api_key='244bca3376d5c5818bc33c811688c2fb'

useEffect(() => {
    getData()
}, [])


    const getData =() =>{
        axios.get(`${URI}&appid=${api_key}`).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    return (
        <Container fluid='sm' className='mt-5'>
            <Row className='gy-4 match-height'>
                <Col md="4">
                    <Card className='bg-dark'>
                        <CardBody>
                            <Card1 />
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    <Card className='bg-dark'>
                        <CardBody>
                            <Card2 />
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className='bg-dark'>
                        <CardBody>
                            <Card3 />
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    <Card className='bg-dark'>
                        <CardBody>
                            <Card4 />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
