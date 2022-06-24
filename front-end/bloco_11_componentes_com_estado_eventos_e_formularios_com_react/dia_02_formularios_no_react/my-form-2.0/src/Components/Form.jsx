import React from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
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
          resumoCV:'',
          cargo:'',
          descricao:'',
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
    render () {
        return (
<form>
    <h1>Cadastro</h1>
    <PersonalForm 
    onHandleChange={this.handleChange}
    onHandleBlur={this.handleBlur}
    state={this.state}
     />
    <ProfessionalForm 
     onHandleChange={this.handleChange}
     onHandleBlur={this.handleBlur}/>
</form>
        )
    }
}

export default Form;