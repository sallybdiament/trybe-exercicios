import React from "react";

class FormDataDisplay extends React.Component {
  render() {
    const {
      state: {
        nome,
        email,
        cpf,
        endereco,
        cidade,
        estado,
        casaOuApartamento,
        resumoCV,
        cargo,
        descricao,
      }
    } = this.props;

    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <p>{`Nome: ${nome}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`CPF: ${cpf}`}</p>
        <p>{`Endereço: ${endereco}`}</p>
        <p>{`Cidade: ${cidade} - ${estado}`}</p>
        <p>{`Tipo de residencia: ${casaOuApartamento}`}</p>
        <h3>Profisional</h3>
        <p>{`Currículo: ${resumoCV}`}</p>
        <p>{`Cargo: ${cargo}`}</p>
        <p>{`Descricao: ${descricao}`}</p>
      </div>
    );
  }
}

export default FormDataDisplay;
