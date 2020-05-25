import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { Container } from "./styles";

class HomePage extends Component {
  state = {
    operator: "Operator 1",
    user: "Raquel",
    initials: "RT"
  };

  render() {
    return (
      <Container>
        <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 20 }}>
          <Grid item md={3} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <text>O seu usuário atual é {this.state.user} {this.state.initials}, para troca-lo utilize os botões abaixo!</text>
          <Button onClick={() => this.setState({ user: "Raquel", initials: "RT" })}>
              Raquel
          </Button>
          <Button onClick={() => this.setState({ user: "Vando", initials: "VM" })}>
              Vando
          </Button>
          <Button onClick={() => this.setState({ user: "Romeu", initials: "RJ" })}>
              Romeu
          </Button>
          <Button onClick={() => this.setState({ user: "Thaisa", initials: "TR" })}>
              Thaisa
          </Button>
          <Button onClick={() => window.location.href="/signup"}>
              Clique aqui para se registrar! 
          </Button>
          </Grid>
          <text
          > O seu operador atual é: {this.state.operator}, para criar um novo <Button onClick={() => window.location.href="/CreateOperator"}>clique aqui</Button></text>
        </Grid>
      </Container>
    );
  }
}

export default HomePage;
