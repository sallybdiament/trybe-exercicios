import React from "react";

class ProfessionalForm extends React.Component {
  render() {
    const {onHandleChange} = this.props;
    return (
      <div>
          <fieldset>
            <legend>Professional info</legend>
            <label htmlFor="resumoCV">
                Resumo CV:
                <textarea 
                  required
                  name="resumoCV" 
                  id="resumoCV"
                  maxLength="1000"
                  onChange={onHandleChange}
                //   value={this.state.resumoCV}
                /> 
              </label>
              <label htmlFor="cargo">
                Cargo:
                <input 
                  required
                  type="text" 
                  name="cargo" 
                  id="cargo"
                  maxLength="40"
                  onChange={onHandleChange}
                onMouseEnter={() =>{
                    global.alert('Preencha com cuidado esta informação!');
                }}
                /> 
              </label>
              <label htmlFor="descricao">
                Descrição do Cargo:
                <textarea
                  name="descricao" 
                  id="descricao"
                  maxLength="500"
                  onChange={onHandleChange}
                //   value={this.state.descricao}
                /> 
              </label>
          </fieldset>
      </div>
    );
  }
}

export default ProfessionalForm;
