import React from 'react';

function handleClick() {
  console.log('Clicou no botão!')
}

const handleClick2 = () =>(console.log('Botão 2 foi clicado'));
const handleClick3 = () =>(console.log('Botão 3 foi clicado'));

class ParaFixar1 extends React.Component { 
  render () {
    return (
      <div>
        <p>Hello World!</p>
        <button onClick={handleClick}>Clique aqui</button>
        <button onClick={handleClick2}>Segundo botão</button>
        <button onClick={handleClick3}>Terceiro botão</button>
      </div>
    )
  }
}

export default ParaFixar1;