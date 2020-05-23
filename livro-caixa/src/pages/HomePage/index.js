import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { Form, Container } from "./styles";

class HomePage extends Component {
  state = {
    user: "User 1",
  };

  render() {
    return (
      <Container>
        <Grid style={{display:"flex", flexDirection:"column", justifyContent:"center", marginTop:20}}>
        <Grid item md={3} style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <text>O seu usuário atual é {this.state.user}, para troca-lo utilize os botões abaixo!</text>
          <Button onClick={() => this.setState({user:"User 1"})}>
              Usuário 1
          </Button>
          <Button onClick={() =>  this.setState({user:"User 2"})}>
              Usuário 2
          </Button>
          <Button onClick={() =>  this.setState({user:"User 3"})}>
              Usuário 3
          </Button>
          <Button onClick={() =>  this.setState({user:"User 4"})}>
              Usuário 4
          </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default HomePage;