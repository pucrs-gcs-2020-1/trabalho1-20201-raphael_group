import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { Form, Container } from "./styles";

class HomePage extends Component {
  state = {
    user: "User 1",
    operator: "Operator 1"
  };

  render() {
    return (
      <Container>
        <Grid style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
          <text

          > O seu usuário atual é: {this.state.user}, para trocá-lo <Button onClick={() => window.location.href="/user"}>clique aqui</Button></text>

          <text
          > O seu operador atual é: {this.state.operator}, para criar um novo <Button onClick={() => window.location.href="/CreateOperator"}>clique aqui</Button></text>
        </Grid>
      </Container>
    );
  }
}

export default HomePage;
