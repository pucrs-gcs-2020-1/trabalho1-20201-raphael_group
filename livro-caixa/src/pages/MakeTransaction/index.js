import React, { Component } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import {Container } from "./styles";

class ListOperator extends Component {
  state = {
    originalUser: "Operator 1",
    originalUserAmount: 100,
    destinyUser: "Operator 2",
    destinyUserAmount: 250,
    amountToSend: 0,
    flag: false
  };


  render() {
      console.log(this.state.originalUserAmount)
      console.log(this.state.amountToSend)
      console.log(this.state.flag)
    return (
      <Container>
        <text>Escolha entre os Operadores abaixo para definir o remetente</text>
        <Grid style={{display:"flex", flexDirection:"column", justifyContent:"center", marginTop:20}}>
        <Grid item md={3} style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <text> Operador Atual: {this.state.originalUser}, seu saldo é: R${this.state.originalUserAmount}</text>
          <Button onClick={() => this.setState({originalUser:"Operator 1", originalUserAmount: 100})}>
              Operador 1
          </Button>
          <Button onClick={() => this.setState({originalUser:"Operator 2", originalUserAmount: 250})}>
              Operador 2
          </Button>
          <Button onClick={() => this.setState({originalUser:"Operator 3",  originalUserAmount: 750})}>
              Operador 3
          </Button>
          <Button onClick={() => this.setState({originalUser:"Operator 4",  originalUserAmount: 430})}>
              Operador 4
          </Button>
          </Grid>
          <text>Escolha entre os Operadores abaixo para definir o destinatário</text>
          <Grid item md={3} style={{display:"flex", flexDirection:"column", justifyContent:"center", marginTop:20}}>
            <text>Seu operador de destino é: {this.state.destinyUser} e seu saldo é de: R${this.state.destinyUserAmount}</text>
          <Button onClick={() => this.setState({destinyUser:"Operator 1", destinyUserAmount: 100})}>
              Operador 1
          </Button>
          <Button onClick={() => this.setState({destinyUser:"Operator 2", destinyUserAmount: 250})}>
              Operador 2
          </Button>
          <Button onClick={() => this.setState({destinyUser:"Operator 3",  destinyUserAmount: 750})}>
              Operador 3
          </Button>
          <Button onClick={() => this.setState({destinyUser:"Operator 4",  destinyUserAmount: 430})}>
              Operador 4
          </Button>
          <TextField variant="outlined" label= "Quanto deseja transferir?" error={this.state.flag} onChange={(e) => this.setState({amountToSend:parseInt(e.target.value), flag: this.state.amountToSend > this.state.originalUserAmount ? true : false})} 
            onClick={() => this.setState({flag: this.state.amountToSend > this.state.originalUserAmount ? true : false})}
          />
          <Button 
          onClick={() => {this.setState({destinyUserAmount: this.state.destinyUserAmount + this.state.amountToSend, originalUserAmount: this.state.originalUserAmount - this.state.amountToSend})}}> Realizar operação!</Button>
          <Button onClick={() => window.location.href="/"}>Para retornar clique Aqui!</Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default ListOperator;
