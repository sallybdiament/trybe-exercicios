import React from 'react';

class ParaFixar2 extends React.Component { 
    state = {
        botaoUm: 0,
        botaoDois: 0,
        botaoTres: 0,
    }
    handleBotaoUm = () => {
        this.setState((estadoAnterior, _props) => ({
            botaoUm: estadoAnterior.botaoUm + 1,
        }));
    }
    handleBotaoDois = () => {
        this.setState((estadoAnterior) => ({
            botaoDois: estadoAnterior.botaoDois + 1,
        }))
    }
    handleBotaoTres = () => {
        this.setState((estadoAnterior) => ({
            botaoTres: estadoAnterior.botaoTres + 1,
        }))
    }
    // Para essa função, não precisamos utilizar o bind porque ela é utilizada
    // apenas dentro do contexto do componente App
    getButtonColor(num) {
        // Essa função contém um ternário que realiza a lógica para mudarmos
        // a cor do botão para verde quando for um número par
        return num % 2 === 0 ? 'green' : 'white';
      }
    render () {
        const { botaoUm, botaoDois, botaoTres } = this.state;
    return (
      <div>
        <p>Para Fixar 2:</p>
        <button
        onClick={this.handleBotaoUm}
        style={{backgroundColor: this.getButtonColor(botaoUm)}}
        >
            {this.state.botaoUm}
        </button>
        <button
        onClick={this.handleBotaoDois}
        style={{backgroundColor: this.getButtonColor(botaoDois)}}
        >
            {this.state.botaoDois}
            </button>
        <button
        onClick={this.handleBotaoTres}
        style={{backgroundColor: this.getButtonColor(botaoTres)}}
        >
            {this.state.botaoTres}
            </button>
      </div>
    )
  }
}

export default ParaFixar2;