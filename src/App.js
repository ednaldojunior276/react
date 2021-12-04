import './App.css';
import Pessoa from './Components/Pessoa';
import List from './Components/List';
import Eventos from './Components/Eventos';
import Form from './Components/Form';
import Condicional from './Components/Condicional';
import Lista from './Components/Lista';

import {BrowserRouter as Router, Switch, Router, Link } from 'react-router-dom'


function App() {
  
  const nome = "IDENTIDADE"

  const meusitens = ["OI"]
  return (
  
  
   <div className="App">
     <h2>Listaa </h2>

     
     <Lista  itens = {meusitens}/> 
   <h3>Condicional </h3> 
   <Condicional />
    <p> {nome} </p>
    <Pessoa 
      id = "1234586"
      nome = "ednaldo"
      idade = "30"
      profissao = "tec telecom"

    />
    <List />
    <Eventos idade = {24} nome = "EDNALDO"/>
    <Form />
   </div>
   
  );
}

export default App;