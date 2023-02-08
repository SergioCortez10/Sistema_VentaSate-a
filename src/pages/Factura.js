import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
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
  const detalle_venta = localStorage.getItem("items");
  var canti = 0;
  const p = false;

  const data = JSON.parse(detalle_venta);
  if (data) {
    data.map((dato) => {
      const can = dato.precio * dato.cantidad;
      canti += can;
    });
    console.log(canti);
  }
  const cobrar = async () => {
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const nit = document.getElementById("nit").value;

    const fetchResponse = await fetch(`http://localhost:1337/api/ventas`, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        data: {
          nombre_cliente: nombreCompleto,
          ci_nit: nit,
          detalle_venta,
        },
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    const respuesta = await fetchResponse.json();
    if (respuesta?.error) {
      alert("Algo ocurrio mal...");
    } else {
      const conf = window.confirm(
        "Se guardo la venta se realizo con exito, ¿Desea volver al menu de productos?"
      );
      if (conf) {
        window.location.href = "/home/productos";
      }
      localStorage.removeItem("items");
    }
  };

  const [datos, setDatos] = useState({
    nombreCompleto: "",
    nit: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    console.log(datos);
  };
  const cancelar= () =>{
    alert("Seguro que quiere cancelar");
    window.location.href = "/home/productos";
    localStorage.removeItem("items");
  }

  const componetRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componetRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("Print success"),
  });
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                  {data.map((item) => (
                    <tr>
                      <th scope="row">{item.cantidad}</th>
                      <td>{item.nombre}</td>
                      <td>{item.precio}</td>
                      <td>{item.cantidad * item.precio}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
            <Row>
              <Col>
                <h6>Monto Total : {canti}</h6>
              </Col>
              <Col className="text-end">
                <Button className="mx-2" color="danger" onClick={handlePrint}>
                  Imprimir
                </Button>
                <Button
                  color="secondary"
                  className="mx-2"
                  onClick={() => cobrar()}
                >
                  Guardar
                </Button>

                <Button color="danger" onClick={()=>cancelar()}>Cancelar</Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
      <div
        ref={componetRef}
        style={{
          padding: "50px",
          width: "100%",
          height: window.innerHeight,
          marginTop: "30px",
          fontFamily: "monospace",
        }}
        className="border"
      >
        <div className="row p-4">
          <div className="col-4">
            <p style={{ lineHeight: "0px" }}>Salteñas La Paz</p>
            <p style={{ lineHeight: "5px" }}>La Paz - Bolivia</p>
          </div>
          <div className="col-6">
            <p style={{ lineHeight: "0px" }}>Telf: 72637456</p>
            <p style={{ lineHeight: "5px" }}>Web: www.saltenaLaPaz.com</p>
          </div>
        </div>
        <hr />
        <h3 className="text-center p-3">FACTURA</h3>
        <div className="row p-4">
          <div className="col-6 d-flex">
            <h6>Nombre Cliente:</h6>
            <h6>{datos.nombreCompleto}</h6>
          </div>
          <div className="col-6 d-flex">
            <h6>Nit o CI:</h6>
            <h6>{datos.nit}</h6>
          </div>
        </div>
        <Row className="p-5">
          <Table className="w-70 mx-auto bordered">
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Producto</th>
                <th>Precio por unidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <th scope="row">{item.cantidad}</th>
                  <td>{item.nombre}</td>
                  <td>{item.precio}</td>
                  <td>{item.cantidad * item.precio}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4 className="pt-3 p-5 d-flex align-items-end justify-content-end">
            Total: {canti}
          </h4>
        </Row>
      </div>
    </>
  );
};

export default Factura;
