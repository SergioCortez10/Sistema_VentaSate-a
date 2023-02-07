import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Login = () => {
  const [datos, setDatos] = useState({
    user: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    console.log(datos);
  };

  
  return (
    <>
      <Container>
        <h1 className="text-center p-5">Salteñas La Paz</h1>
        <Row className="justify-content-center">
          <Col sm="8">
            <Card className="p-4">
              <CardBody>
                <h3 className="text-center">Login</h3>
                <p className="text-center">
                  Inserte sus datos para ingresar al sistema
                </p>
              </CardBody>

              <Form>
                <FormGroup>
                  <Label for="user">Usuario</Label>
                  <Col>
                    <Input
                      id="user"
                      name="user"
                      placeholder="Ingresar usuario"
                      type="text"
                      onChange={handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Col>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Ingresar contraseña"
                      type="password"
                      onChange={handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <Col className="text-center">
                  <Button>
                    {datos.user === "admin" && datos.password=== "admin"? (
                      <Link
                        style={{ color: "white", textDecoration: "none" }}
                        to={"/home"}
                      >
                        Ingresar
                      </Link>
                    ) : (
                      <>
                        <Link
                          style={{ color: "white", textDecoration: "none" }}
                          to={"/"}
                        >
                          Ingresar
                        </Link>
                      </>
                    )}
                  </Button>
                </Col>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
