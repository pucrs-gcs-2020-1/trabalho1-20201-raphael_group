import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { Form, Container } from "./styles";

class ListOperator extends Component {
  state = {
    operator: "Jorge",
    init: "(JG)"
  };

  render() {
    return (
      <Container>
        <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 20 }}>
          <Grid item md={3} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <text>O seu operador atual é {this.state.operator} {this.state.init}, para trocá-lo utilize os botões abaixo!</text>
          <Button onClick={() => this.setState({ operator: "Jorge", init: "(JG)" })}>
              Jorge
          </Button>
          <Button onClick={() => this.setState({ operator: "Paula", init: "(PB)" })}>
              Paula
          </Button>
          <Button onClick={() => this.setState({ operator: "Vanessa", init: "(VV)" })}>
              Vanessa
          </Button>
          <Button onClick={() => this.setState({ operator: "Caio", init: "(CL)" })}>
              Caio
          </Button>
          <Button onClick={() => window.location.href="/CreateOperator"}>
              Clique aqui para registrar um novo operador!
          </Button>
          <text> Para voltar para Home Page <Button onClick={() => window.location.href="/"}>clique aqui</Button>
          </text>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default ListOperator;
