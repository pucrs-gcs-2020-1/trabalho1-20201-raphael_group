import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { Form, Container } from "./styles";

class User extends Component {
  state = {
    user: "User 1",
  };

  render() {
    return (
      <Container>
        <text>Escolha entre os outros Usuários abaixo!</text>
        <Grid style={{display:"flex", flexDirection:"column", justifyContent:"center", marginTop:20}}>
        <Grid item md={3} style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <text> Usuário Atual: {this.state.user}</text>
          <Button onClick={() => this.setState({user:"User 1"})}>
              Usuário 1
          </Button>
          <Button onClick={() => this.setState({user:"User 2"})}>
              Usuário 2
          </Button>
          <Button onClick={() => this.setState({user:"User 3"})}>
              Usuário 3
          </Button>
          <Button onClick={() => this.setState({user:"User 4"})}>
              Usuário 4
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

export default User;