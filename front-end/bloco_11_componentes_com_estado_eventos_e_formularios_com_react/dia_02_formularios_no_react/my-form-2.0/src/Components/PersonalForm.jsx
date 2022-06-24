import React from 'react';
import '../CSS/PersonalForm.css';

const estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal","Espirito Santo","Goiás","Maranhão","Mato Grosso do Sul","Mato Grosso","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins",]

class PersonalForm extends React.Component{
    constructor (props){
        super(props);
        this.state = {
          nome: '',
          email: '',
          cpf: 0,
          endereco: '',
          cidade:'',
          estado: '',
          casaOuApartamento:'',
    }
  }

validateAddress = (endereco) => endereco.replace(/[^\w\s]/gi, '')

handleChange = (event) => {
const {name } = event.target;
let {value} = event.target;
if (name === "nome") value = value.toUpperCase()
if (name === "endereco") value = this.validateAddress(value)
this.setState({ [name]: value})
    }

    handleBlur = (event) => {
      const {name } = event.target;
      let {value} = event.target;
      if (name === "cidade") value = value.match(/ˆ\d/) ? "" : value;
      this.setState({ [name]: value})
    }
    
    render() {
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
                  onChange={this.handleChange}
                  value={this.state.nome}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  value={this.setState.endereco}
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
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                </label>
                <label htmlFor='estado'>
                  Selecione seu estado:
                  <select
                    name="estado"
                    required
                    id="estado"
                    onChange={this.handleChange}
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
                     onChange={this.handleChange}
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
                     onChange={this.handleChange}
                   />
                </label>
            </fieldset>
            </form>
          </div>
        )
    }
}

export default PersonalForm;