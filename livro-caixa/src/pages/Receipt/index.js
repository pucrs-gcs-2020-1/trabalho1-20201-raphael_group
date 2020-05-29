import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Receipt extends Component {
    state = {
        userReport:[
            this.createData('Raquel', "R$100", "(RT)", "101", "25/05/2019", ["Enviou R$10 para conta de id 303",",", " Recebeu R$25 de conta com o id 404"]),
            this.createData('Vando', "R$250", "(VM)", "303", "28/05/2019", ["Enviou R$100 para conta de id 202", ",", " Recebeu R$10 de conta com o id 101"]),
            this.createData('Romeu', "R$750", "(RJ)", "202", "23/05/2019", ["Enviou R$100 para conta de id 404", ",", " Recebeu R$100 de conta com o id 303"]),
            this.createData('Thaisa', "R$430", "(TR)", "404", "21/05/2019", ["Enviou R$25 para conta de id 101", ",", " Recebeu R$100 de conta com o id 202"])
        ]
    };

    createData(nome, saldo, iniciais, id, dataCriacao, movimentos) {
        return { nome, saldo, iniciais, id, dataCriacao, movimentos };
    }

    render() {
        return (
            <>  
                <Typography style={{fontSize:24, fontWeight:"bold", margin:20}}>Bem vindo ao relatório geral de usuários da plataforma!</Typography>
                <TableContainer style={{width:"75%", marginLeft:"10%", marginRight:"10%", marginTop:"20px"}}  component={Paper}>
                    <Table size="small"  aria-label="simple table">
                        <TableHead style={{backgroundColor:"#72bcd4"}}>
                            <TableRow>
                                <TableCell>Nomes</TableCell>
                                <TableCell align="center">Saldo</TableCell>
                                <TableCell align="center">Iniciais</TableCell>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Data de Criação</TableCell>
                                <TableCell align="left">Movimentos Recentes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{backgroundColor:"gray"}}>
                            {this.state.userReport.map((row) => (
                                <TableRow key={row.nome}>
                                    <TableCell style={{color:"white"}} component="th" scope="row">
                                        {row.nome}
                                    </TableCell>
                                    <TableCell style={{color:"white"}} align="center">{row.saldo}</TableCell>
                                    <TableCell style={{color:"white"}} align="center">{row.iniciais}</TableCell>
                                    <TableCell style={{color:"white"}} align="center">{row.id}</TableCell>
                                    <TableCell style={{color:"white"}} align="center">{row.dataCriacao}</TableCell>
                                    <TableCell style={{color:"white"}} align="left">{row.movimentos}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }

}

export default Receipt
