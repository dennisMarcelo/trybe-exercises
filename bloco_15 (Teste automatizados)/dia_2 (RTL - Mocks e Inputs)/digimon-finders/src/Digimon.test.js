import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  const digimon = {
    img: "https://digimon.shadowsmith.com/img/patamon.jpg", 
    level: "Rookie", 
    name: "Patamon",
  }
  
  
  it('exist digimon name with Patamon', async () => {
    //renderizar e obter dados
    render(<Digimon digimon={digimon} />);
    const digimonName = screen.getByTestId('digimonName');
  
    //realizando teste
    expect(digimonName).toBeInTheDocument();
    expect(digimonName).toHaveTextContent('Patamon');

   
  });

  it('exist digimon lavel with Rookie', () => {
    render(<Digimon digimon={digimon} />);
    const digimonLevel = screen.getByTestId('digimonLevel');

    expect(digimonLevel).toBeInTheDocument();
    expect(digimonLevel).toHaveTextContent('level: Rookie');

    screen.debug(digimonLevel);
  })

  it('exist image ', () => {
    render(<Digimon digimon={digimon} />);
    const img = screen.getByAltText('Patamon');

    expect(img).toBeInTheDocument();
    expect(img.src).toBe("https://digimon.shadowsmith.com/img/patamon.jpg")
  })
});