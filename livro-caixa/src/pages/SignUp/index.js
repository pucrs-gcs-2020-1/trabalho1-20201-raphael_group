import React, { Component } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { Container } from "./styles";

class SignUp extends Component {
  state = {
      userName: "",
      initials: ""
  };

  render() {
    return (
      <Container>
        <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 20 }}>
          <Grid item md={3} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <text style={{marginBottom:20}}> Digite as informações requeridas</text>
             <TextField variant="outlined" label= "Nome " onChange={(value) => this.setState({userName:value})} style={{marginBottom:20}}/>
             <TextField variant="outlined" label= "Iniciais " onChange={(value) => this.setState({initials: value})} />
             <Button onClick={() => window.location.href="/"}> Confirmar dados!</Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default SignUp;
