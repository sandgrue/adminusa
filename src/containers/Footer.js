import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div class="footerBottom text-center">
            <Container>
                <Row>
                    <Col class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="footerText text-center">
                            <p class="mb-0">2022 &copy; USA Marriage</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer