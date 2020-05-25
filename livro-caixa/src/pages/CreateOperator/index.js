import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, TextField } from "@material-ui/core";
import { Form, Container } from "./styles";

class CreateOperator extends Component {
  state = {
    user: "User 1",
  };


  render() {
    return (
      <Container>
        <Grid style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", marginTop:"30px"}}>
          <label>
            Nome:
            <input type="text" name="name"/>
          </label>
          <label style={{marginLeft:"30px"}}>
            Iniciais:
            <input type="text" name="iniciais"/>
          </label>
          <input type="submit" value="Confirmar" onClick={() => window.location.href="/user"}/>
        </Grid>
      </Container>
    );
  }
}

export default CreateOperator;
