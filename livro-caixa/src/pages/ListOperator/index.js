import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { Container } from "./styles";

class ListOperator extends Component {
  state = {
    operator: "Jorge",
    init: "(JG)",
    index: 0
  };

  render() {
    return (
      <Container>
        <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 20 }}>
          <Grid item md={3} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <text>O seu operador atual é {this.state.operator} {this.state.init}, para trocá-lo utilize os botões abaixo!</text>
          <Button style={{backgroundColor: this.state.index === 1?  "yellow" : "white"}} onClick={() => this.setState({ operator: "Jorge", init: "(JG)", index: 1})}>
              Jorge
          </Button>
          <Button style={{backgroundColor: this.state.index === 2?  "yellow" : "white"}} onClick={() => this.setState({ operator: "Paula", init: "(PB)", index: 2})}>
              Paula
          </Button>
          <Button style={{backgroundColor: this.state.index === 3?  "yellow" : "white"}} onClick={() => this.setState({ operator: "Vanessa", init: "(VV)", index: 3})}>
              Vanessa
          </Button>
          <Button style={{backgroundColor: this.state.index === 4 ?  "yellow" : "white"}} onClick={() => this.setState({ operator: "Caio", init: "(CL)", index: 4})}>
              Caio
          </Button>
          <Button onClick={() => window.location.href="/createOperator"}>
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
