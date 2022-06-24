import React from 'react';
import '../CSS/PersonalForm.css';

const estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal","Espirito Santo","Goiás","Maranhão","Mato Grosso do Sul","Mato Grosso","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins",]

class PersonalForm extends React.Component{
    
    render() {
      const {onHandleChange} = this.props
      const {onHandleBlur} = this.props
      const { state: {nome, endereco, cidade}} = this.props
      return (
          <div className="form">
            <form> 
            <fieldset className="form">
              <legend>Dados Pessoais</legend>
              <label htmlFor="nome">
                Nome
                <input 
                  required
                  type="text" 
                  name="nome" 
                  id="nome"
                  maxLength="40"
                  onChange={onHandleChange}
                  value={nome}
                /> 
              </label>
              <label htmlFor='email'>
                Email
                <input 
                  required
                  type="email" 
                  name="email" 
                  id="email"
                  maxLength="50"
                  onChange={onHandleChange}
                />
              </label>
              <label htmlFor='cpf'>
                CPF
                <input  
                  required
                  type="number"
                  name="cpf"
                  id="cpf"
                  maxLength="11"
                  onChange={onHandleChange}
                />
                </label>
              <label htmlFor='endereco'>
                Endereço
                <input  
                  required
                  type="text"
                  name="endereco"
                  id="endereco"
                  maxLength="200"
                  onChange={onHandleChange}
                  value={endereco}
                />
              </label>
              <label htmlFor='cidade'>
                Cidade
                <input  
                  required
                  type="text"
                  name="cidade"
                  id="cidade"
                  maxLength="28"
                  onChange={onHandleChange}
                  onBlur={onHandleBlur}
                />
                </label>
                <label htmlFor='estado'>
                  Selecione seu estado:
                  <select
                    name="estado"
                    required
                    id="estado"
                    onChange={onHandleChange}
                  >
                    <option value=''>Selecionar</option>
                      {estados.map((estado, index) => (
                        <option key={index}>{estado}</option>
                      ))}
                  </select>
                </label>
                <label>
                   Casa
                   <input 
                     required
                     type="radio"
                     name="casaOuApartamento"
                     id="casaOuApartamento" 
                     value="casa"  
                     onChange={onHandleChange}
                   />
                </label>
                <label>
                   Apartamento
                   <input 
                     required
                     type="radio"
                     name="casaOuApartamento"
                     id="casaOuApartamento" 
                     value="apartamento"  
                     onChange={onHandleChange}
                   />
                </label>
            </fieldset>
            </form>
          </div>
        )
    }
}

export default PersonalForm;