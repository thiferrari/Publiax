import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';


export default class BodyComponent extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="contatoFormContainer" >
                            <Form>
                                <FormGroup>
                                    <Label for="nome">Login:</Label>
                                    <Input type="name" name="nome" id="TbxNome" placeholder="Digite o seu nome completo" />
                                </FormGroup>
                              </Form>          
                        </div>
                    </Col>
                    <Col lg="6">
                    <div className="contatoFormContainer" >
                            <Form>
                                <FormGroup>
                                    <Label for="nome">Senha:</Label>
                                    <Input type="name" name="nome" id="TbxNome" placeholder="Digite o seu nome completo" />
                                </FormGroup>
                            </Form>
                        </div>
                    </Col>
                    <Button color="success" size="lg">Enviar</Button>

                </Row>
            </Container>
        );
    }
}