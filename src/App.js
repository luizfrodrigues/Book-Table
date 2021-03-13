import React, { Component } from 'react';
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";
import TabelaHead from "./components/TabelaHead";

class App extends Component {
  state = {
    livros: []
  }

  componentDidMount() {
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function(error) {
        console.log("Erro na Requisição");
      })
      .finally(function(){
        console.log("Sempre retorna")
      });
  }

  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(livro => livro.id !==id);
    this.setState({ livros })
  }

  handleOrdenarTituloCrescente = titulo => {
    const livros = this.state.livros.sort((a,b) =>
    a.titulo < b.titulo ? -1 : 0
    );
    this.setState({ livros })
  }
  handleOrdenarTituloDecrescente = titulo => {
    const livros = this.state.livros.sort((a,b) =>
    a.titulo < b.titulo ? -1 : 0
    );
    livros.reverse()
    this.setState({ livros })
  }

  
  render(){
    return (
      <table className="tabela" >
        <TabelaHead
          ordenarTituloCrescente={ this.handleOrdenarTituloCrescente }
          ordenarTituloDecrescente={ this.handleOrdenarTituloDecrescente }
        />
        <TabelaBody
          livros={ this.state.livros }
          removerLinha={ this.handleRemoverLinha }
        />
        <TabelaFoot qdeLivros = { this.state.livros.length }/>
      </table>
    );
  }  
}

export default App;
