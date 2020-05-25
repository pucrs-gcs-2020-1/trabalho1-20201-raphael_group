import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { Form, Container } from "./styles";

class ListOperator extends Component {
  state = {
    operator: "Operator 1",
  };

  render() {
    return (
      <Container>
        <text>Escolha entre os outros Operadores abaixo!</text>
        <Grid style={{display:"flex", flexDirection:"column", justifyContent:"center", marginTop:20}}>
        <Grid item md={3} style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <text> Operador Atual: {this.state.user}</text>
          <Button onClick={() => this.setState({user:"Operator 1"})}>
              Operador 1
          </Button>
          <Button onClick={() => this.setState({user:"Operator 2"})}>
              Operador 2
          </Button>
          <Button onClick={() => this.setState({user:"Operator 3"})}>
              Operador 3
          </Button>
          <Button onClick={() => this.setState({user:"Operator 4"})}>
              Operador 4
          </Button>
          <Button onClick={() => window.location.href="/"}>
              Para voltar clique aqui!
          </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default ListOperator;
