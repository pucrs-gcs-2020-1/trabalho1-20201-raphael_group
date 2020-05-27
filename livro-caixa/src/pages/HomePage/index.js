import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { Container } from "./styles";

class HomePage extends Component {
  state = {
    operator: "Jorge (JG)",
    user: "Raquel",
    initials: "(RT)",
    index: 0
  };

  render() {
    return (
      <Container>
        <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 20 }}>
          <Grid item md={3} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <text>O seu usuário atual é {this.state.user} {this.state.initials}, para troca-lo utilize os botões abaixo!</text>
          <Button style={{backgroundColor: this.state.index === 1?  "yellow" : "white"}} onClick={() => this.setState({ user: "Raquel", initials: "(RT)", index: 1})}>
              Raquel
          </Button>
          <Button style={{backgroundColor: this.state.index === 2?  "yellow" : "white"}} onClick={() => this.setState({ user: "Vando", initials: "(VM)", index: 2})}>
              Vando
          </Button>
          <Button style={{backgroundColor: this.state.index === 3?  "yellow" : "white"}} onClick={() => this.setState({ user: "Romeu", initials: "(RJ)", index: 3 })}>
              Romeu
          </Button>
          <Button style={{backgroundColor: this.state.index === 4?  "yellow" : "white"}} onClick={() => this.setState({ user: "Thaisa", initials: "(TR)", index: 4 })}>
              Thaisa
          </Button>
          <Button onClick={() => window.location.href="/signup"}>
              Clique aqui para se registrar!
          </Button>
          <text> O seu operador atual é: {this.state.operator}</text>
          <Button onClick={() => window.location.href="/listOperator"}>Clique aqui para trocar!</Button>
          <Button onClick={() => window.location.href="/makeTransactions"}> Para fazer movimentos entre contas, clique aqui!</Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default HomePage;
