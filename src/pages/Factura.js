import React from "react";
import { Form } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import NavBar from "../components/NavBar";

const Factura = () => {
  return (
    <>
      <NavBar />
      <Container className="pt-3">
        <Card>
          <h3 className="text-center pt-3">Factura de compra</h3>
          <Form className="p-4">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="nombreCompleto">Nombre Completo</Label>
                  <Input
                    id="nombreCompleto"
                    name="nombreCompleto"
                    placeholder="Ingresar nombre completo"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="nit">Nit o Ci</Label>
                  <Input
                    id="nit"
                    name="nit"
                    placeholder="Ingresar ci o nit"
                    type="number"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Table hover>
                <thead>
                  <tr>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th>Precio por unidad</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2</th>
                    <td>Salteña santa clara</td>
                    <td>6</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row>
              <Col className="text-end">
                <Button color="success" className="mx-2">
                  Impimir
                </Button>
                <Button color="danger">Cancelar</Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default Factura;
