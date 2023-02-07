import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import NavBar from "../components/NavBar";
import { productosData, productosRefrescosData } from "../data/productos";

const Productos = () => {
  const [monto, setMonto] = useState(0);
  const [newVenta, setNewVenta] = useState(productosData);
  const [newVentaRe, setNewVentaRe] = useState(productosRefrescosData);

  const agregarSaltena = (id) => {
    const cantidadActual = newVenta.filter((x) => x.id === id);
    const ca = cantidadActual[0].cantidad + 1;
    setMonto(monto + cantidadActual[0].precio);
    console.log(newVenta);
    const as = newVenta.map((x) =>
      x.id === id
        ? {
            ...x,
            cantidad: ca,
          }
        : x
    );
    setNewVenta(as);
    console.log(newVenta);
  };

  const agregarRefresco = (id) => {
    const cantidadActual = newVentaRe.filter((x) => x.id === id);
    const ca = cantidadActual[0].cantidad + 1;
    setMonto(monto + cantidadActual[0].precio);
    console.log(newVenta);
    const as = newVentaRe.map((x) =>
      x.id === id
        ? {
            ...x,
            cantidad: ca,
          }
        : x
    );
    setNewVentaRe(as);
    console.log(newVenta);
  };

  const quitarSaltena = (id) => {
    const cantidadActual = newVenta.filter((x) => x.id === id);
    const ca = cantidadActual[0].cantidad - 1;
    setMonto(monto - cantidadActual[0].precio);
    const as = newVenta.map((x) =>
      x.id === id
        ? {
            ...x,
            cantidad: ca,
          }
        : x
    );
    setNewVenta(as);
    console.log(newVenta);
  };
  const quitarRefresco = (id) => {
    const cantidadActual = newVentaRe.filter((x) => x.id === id);
    const ca = cantidadActual[0].cantidad - 1;
    setMonto(monto - cantidadActual[0].precio);
    const as = newVentaRe.map((x) =>
      x.id === id
        ? {
            ...x,
            cantidad: ca,
          }
        : x
    );
    setNewVentaRe(as);
    console.log(newVenta);
  };

  useEffect(() => {}, [newVenta]);

  return (
    <>
      <NavBar />
      <Container>
        <Row className="pt-4 p-2">
          <Card className="p-4">
            <h4 className="text-center">Salteñas La Paz</h4>
            <h6>Salteñas:</h6>
            <Row className="text-center">
              {newVenta.map((item) => (
                <Col
                  xs="12"
                  md="6"
                  xl="3"
                  className="pt-3 d-flex text-center align-items-center justify-content-center"
                >
                  <Card
                    style={{
                      width: "18rem",
                    }}
                  >
                    <img alt="Sample" src={item.image} />
                    <CardBody>
                      <CardTitle tag="h5">{item.nombre}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Precio: {item.precio} bs
                      </CardSubtitle>
                      <Row className="text-center">
                        <Col xs="5" md="5" xl="5">
                          {item.cantidad > 0 && (
                            <Button
                              outline
                              onClick={() => quitarSaltena(item.id)}
                            >
                              -
                            </Button>
                          )}
                        </Col>
                        <Col xs="2" md="2" xl="2">
                          {item.cantidad}
                        </Col>
                        <Col xs="5" md="5" xl="5">
                          <Button
                            outline
                            onClick={() => agregarSaltena(item.id)}
                          >
                            +
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>

            <h6 className="pt-4">Refrescos:</h6>
            <Row>
              {newVentaRe.map((item) => (
                <Col
                  xs="12"
                  md="6"
                  xl="3"
                  className="pt-3 d-flex text-center align-items-center justify-content-center"
                >
                  <Card
                    className="p-4"
                    style={{
                      width: "18rem",
                    }}
                  >
                    <img alt="Sample" src={item.image} />
                    <CardBody>
                      <CardTitle tag="h5">{item.nombre}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Precio: {item.precio} bs
                      </CardSubtitle>
                    </CardBody>
                    <Row className="text-center">
                      <Col xs="5" md="5" xl="5">
                        {item.cantidad > 0 && (
                          <Button
                            outline
                            onClick={() => quitarRefresco(item.id)}
                          >
                            -
                          </Button>
                        )}
                      </Col>
                      <Col xs="2" md="2" xl="2">
                        {item.cantidad}
                      </Col>
                      <Col xs="5" md="5" xl="5">
                        <Button
                          onClick={() => agregarRefresco(item.id)}
                          outline
                        >
                          +
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>

            <Row className="pt-4 pb-4">
              <Col sm="4" className="text-center">
                <h4>Monto Total:</h4>
              </Col>
              <Col sm="4" className="text-center">
                <h4>{monto} bs</h4>
              </Col>
              <Col sm="4" className="text-center">
                <Button>
                  <Link
                    style={{ color: "White", textDecoration: "none" }}
                    to="/home/productos/factura"
                  >
                    Ir a pagar{" "}
                  </Link>
                </Button>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Productos;
