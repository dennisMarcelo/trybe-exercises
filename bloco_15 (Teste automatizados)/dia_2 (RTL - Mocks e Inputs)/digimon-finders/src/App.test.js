import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {


  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    const inputElement = getByText(/Search Digimon/i)

    expect(linkElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it('test chage input text', () => {
    //rederizar
    render(<App />);
    const input = screen.getByTestId('input');
    
    //testar interações
    expect(input).toHaveValue('');
    fireEvent.change(input, {target: {value: 'Patamon'}});
    expect(input).toHaveValue('Patamon')
  });

  it('h2-digimonName start with text null', () => {
    render(<App />);
    const digimonName = screen.queryByTestId('digimonName');

    //testes
    expect(digimonName).toBeNull();
  })

  it('promise resolve show digimon datails', async () => {
    const digimonObjMock = [{
      img: "https://digimon.shadowsmith.com/img/patamon.jpg", 
      level: "Rookie", 
      name: "Patamon",
    }]
    //mockFn.mockResolvedValue(value)

    jest.spyOn(global, 'fetch')
    const fetchAPI =  global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimonObjMock)
    })

    //rederizar
    const {getByAltText, findByText} = render(<App />);
    const input = screen.getByTestId('input');
    const button = screen.getByTestId('buttonSearch');

    // eventos realizados pelo user
    fireEvent.change(input, {target: {value: 'Patamon'}});
    fireEvent.click(button);

    await findByText('level: Rookie');
    expect(await findByText('Patamon')).toBeInTheDocument();
    expect(getByAltText('Patamon')).toBeInTheDocument();

    expect(fetchAPI).toBeCalledTimes(1);
    expect(fetchAPI).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Patamon')

    screen.debug();
  });

  it('searc digimon nonexistent', () => {
    const ErrorMsg = 'A is not a Digimon in our database.'; 
  })

});