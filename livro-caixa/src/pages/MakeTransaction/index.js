import React, { Component } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import {Container } from "./styles";

class ListOperator extends Component {
  state = {
    originalUser: "Raquel (RT)",
    originalUserAmount: 100,
    destinyUser: "Vando (VM)",
    destinyUserAmount: 250,
    amountToSend: 0,
    originalIndex: 0,
    destinyIndex: 0,
    flag: false
  };


  render() {
    return (
      <Container>
        <text>Escolha entre os Usuário abaixo para definir o remetente</text>
        <Grid style={{display:"flex", flexDirection:"column", justifyContent:"center", marginTop:20}}>
        <Grid item md={3} style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <text> Usuário Atual: {this.state.originalUser}, seu saldo é: R${this.state.originalUserAmount}</text>
          <Button style={{backgroundColor: this.state.originalIndex === 1?  "yellow" : "white"}} onClick={() => this.setState({originalUser:"Raquel (RT)", originalUserAmount: 100, originalIndex:1})}>
              Raquel
          </Button>
          <Button style={{backgroundColor: this.state.originalIndex === 2?  "yellow" : "white"}} onClick={() => this.setState({originalUser:"Vando (VM)", originalUserAmount: 250, originalIndex:2})}>
              Vando
          </Button>
          <Button style={{backgroundColor: this.state.originalIndex === 3?  "yellow" : "white"}} onClick={() => this.setState({originalUser:"Romeu (RJ)",  originalUserAmount: 750, originalIndex:3})}>
              Romeu
          </Button>
          <Button style={{backgroundColor: this.state.originalIndex === 4 ?  "yellow" : "white"}} onClick={() => this.setState({originalUser:"Thaisa (TR)",  originalUserAmount: 430, originalIndex:4})}>
              Thaisa
          </Button>
          </Grid>
          <text>Escolha entre os Usuários abaixo para definir o destinatário</text>
          <Grid item md={3} style={{display:"flex", flexDirection:"column", justifyContent:"center", marginTop:20}}>
            <text>Seu Usuário de destino é: {this.state.destinyUser} e seu saldo é de: R${this.state.destinyUserAmount}</text>
          <Button style={{backgroundColor: this.state.destinyIndex === 1 ?  "#72bcd4" : "white"}} onClick={() => this.setState({destinyUser:"Raquel (RT)", destinyUserAmount: 100, destinyIndex: 1})}>
              Raquel
          </Button>
          <Button style={{backgroundColor: this.state.destinyIndex === 2 ?  "#72bcd4" : "white"}} onClick={() => this.setState({destinyUser:"Vando (VM)", destinyUserAmount: 250, destinyIndex: 2})}>
              Vando
          </Button>
          <Button style={{backgroundColor: this.state.destinyIndex === 3 ?  "#72bcd4" : "white"}} onClick={() => this.setState({destinyUser:"Romeu (RJ)",  destinyUserAmount: 750, destinyIndex: 3})}>
              Romeu
          </Button>
          <Button style={{backgroundColor: this.state.destinyIndex === 4 ?  "#72bcd4" : "white"}} onClick={() => this.setState({destinyUser:"Thaisa (TR)",  destinyUserAmount: 430, destinyIndex: 4})}>
              Thaisa
          </Button>
          <TextField variant="outlined" type="number" inputProps={{ step:10 }} label= "Quanto deseja transferir?" error={this.state.flag} onChange={(e) => this.setState({amountToSend:parseInt(e.target.value), flag: this.state.amountToSend > this.state.originalUserAmount ? true : false})} 
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
