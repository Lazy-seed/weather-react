import React, { useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

export default function Home({W_data,Forecast_data,Air_data}) {



    return (
        <Container fluid='sm' className='mt-5'>
            <Row className='gy-4 match-height'>
                <Col md="4">
                    <Card className=' '>
                        <CardBody>
                            <Card1 W_data={W_data}/>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    
                            <Card2 W_data={W_data} Air_data={Air_data}/>
                       
                </Col>
                <Col md="4">
                    <Card className=' '>
                        <CardBody>
                            <Card3  Forecast_data={Forecast_data}/>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    <Card className=' '>
                        <CardBody>
                            <Card4 W_data={W_data}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
