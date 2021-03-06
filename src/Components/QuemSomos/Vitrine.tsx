import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';


export default class VitrineComponent extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg="6">
                        <Card>
                            <CardHeader>
                                <h3>Mais que uma Agência, uma Referência</h3>
                            </CardHeader>
                            <CardBody className="winnDescription">
                                <p>A Winn Promoções e Eventos é uma agência formada por profissionais com vasta experiência no mercado de Marketing promocional e eventos, com forte presença no mercado Imobiliário e corporativo. Mais que uma agência de promoções e eventos, somos referência em todos os serviços oferecidos, tendo sempre como marca a entrega rápida, comprometimento e a eficiência em tudo que faz. Desta maneira você encontra em nossa agência, todas as opções que farão sua empresa se destacar cada vez mais no mercado.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <img src="src/img/winn.jpg" className="img-responsive" />
                    </Col>
                </Row>
            </Container>
        );
    }
}