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
import { productosData } from "../data/productos";

const itemsLocalStorage = [];

const Productos = () => {
  const [monto, setMonto] = useState(0);
  const [newVenta, setNewVenta] = useState(productosData);

  const agregarSaltena = (id) => {
    const cantidadActual = newVenta.filter((x) => x.id === id);
    const valordiferente = newVenta.filter((x) => x.id !== id);
    const ca = cantidadActual[0].cantidad + 1;
    setMonto(monto + cantidadActual[0].precio);
    const as = newVenta.map((x) =>
      x.id === id
        ? {
            ...x,
            cantidad: ca,
          }
        : x
    );
    setNewVenta(as);

    if (cantidadActual[0].cantidad === 0) {
      itemsLocalStorage.push({
        id,
        cantidad: ca,
        nombre: cantidadActual[0].nombre,
        precio: cantidadActual[0].precio,
      });
    localStorage.setItem("items", JSON.stringify(itemsLocalStorage));

    } else {
      const detalle_venta = localStorage.getItem("items");
      const data = JSON.parse(detalle_venta)
      const can = cantidadActual[0].cantidad + 1
      console.log(can);
      console.log(data);
      const aitemsLocalStorage = data.map((x) =>
        x.id === id
          ? {
              ...x,
              cantidad: can,
            }
          : x
      );
      localStorage.setItem("items", JSON.stringify(aitemsLocalStorage));

    }
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
    
    const detalle_venta = localStorage.getItem("items");
      const data = JSON.parse(detalle_venta)
      const can = cantidadActual[0].cantidad - 1
      console.log(can);
      console.log(data);
      const aitemsLocalStorage = data.map((x) =>
        x.id === id
          ? {
              ...x,
              cantidad: can,
            }
          : x
      );
      localStorage.setItem("items", JSON.stringify(aitemsLocalStorage));
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
