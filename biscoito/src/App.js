import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {};

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.' ,
    ];

  }
  render() {
    return (
    <div>
      <img src={require('./assets/biscoito.jpeg')}
      alt="biscoito"></img>
      <Botao />
      <h3>Frase Aleatória...</h3>
    </div>
    );
  }
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button>Abrir biscoito</button>
      </div>
    );
  }
}




export default App;
