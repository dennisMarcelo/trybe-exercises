import React from 'react';
import FildsetPersonalData from './FildsetPersonalData';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryStates: '',
      typeOfHolse:'',
    }

  }
  firstCharecterIsString = ({target: {name, value}}) => {
    const firtChar =  parseInt(value.split('')[0])
    if (typeof firtChar === 'number' && !isNaN(firtChar) ) {
      this.setState({
        [name]: '',
      })
      alert('Esse Campo deve começar com uma letra')
    }
  }

  handleChange = ({target: {name, value, type}}) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
       <FildsetPersonalData
        state={this.state}
        firstCharecterIsString={this.firstCharecterIsString}
        handleChange={this.handleChange}/>
      </form>
    );
  }
}

export default Form;
