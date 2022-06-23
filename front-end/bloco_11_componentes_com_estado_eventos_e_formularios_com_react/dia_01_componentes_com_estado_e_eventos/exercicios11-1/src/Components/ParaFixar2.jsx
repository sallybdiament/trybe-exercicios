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
    render () {
    return (
      <div>
        <p>Para Fixar 2:</p>
        <button onClick={this.handleBotaoUm}>{this.state.botaoUm}</button>
        <button onClick={this.handleBotaoDois}>{this.state.botaoDois}</button>
        <button onClick={this.handleBotaoTres}>{this.state.botaoTres}</button>
      </div>
    )
  }
}

export default ParaFixar2;