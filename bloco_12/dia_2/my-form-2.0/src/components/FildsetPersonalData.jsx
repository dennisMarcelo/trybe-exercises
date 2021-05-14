import React from 'react';
import getURL from './getURL'

class FildsetPersonalData extends React.Component {
  getCountryStates = async () =>{
    const apiCountryStates = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    const arrayCountryStates = await getURL(apiCountryStates)
      
    return arrayCountryStates
    .map((state) => (
      <option key={state.id} value={state.nome}>{state.nome}</option>
    ))
  
  }

  render() {
    
    return (
      <fieldset className="dado-pessoais">
        <legend>Dados Pessoais</legend>
        <input 
          type='text'
          name='name'
          placeholder='Nome'
          maxLength="40"
          value={this.props.state.name}
          onChange={this.props.handleChange}
          required />

        <input
          type='email'
          name='email'
          placeholder='Email'
          maxLength="50"
          value={this.props.state.email}
          onChange={this.props.handleChange}
          required />

        <input 
          type='text'
          name='cpf'
          placeholder='CPF'
          maxLength="50"
          value={this.props.state.cpf}
          onChange={this.props.handleChange}
          required />

        <input type='text'
          name='address'
          placeholder='Endereço'
          maxLength="200"
          value={this.props.state.address}
          onChange={this.props.handleChange}
          required />

        <input 
          type='text'
          name='city'
          placeholder='Cidade'
          maxLength="28"
          value={this.props.state.city}
          onChange={this.props.handleChange}
          onBlur={this.props.firstCharecterIsString}
          required />

        <select name='countryStates' value={this.props.state.countryStates} onChange={this.props.handleChange} required>
          {this.getCountryStates().then((data)=> data)}
        </select>

        <div className='moradia' >
          <span>Moradia:</span>  
          <label htmlFor="apartamento">
            <input type='radio' id='apartamento' value='apartamento' name='typeOfHolse'/>
            Apartamento
          </label>

          <label htmlFor="casa">
            <input type='radio' id='casa' value='casa' name='typeOfHolse'/>
            Casa
          </label>
        </div>
      </fieldset>
    );
  }
}

export default FildsetPersonalData;
