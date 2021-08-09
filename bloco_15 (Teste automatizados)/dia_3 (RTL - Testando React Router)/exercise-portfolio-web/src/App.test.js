import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './helper/renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('home tests',() => {
  it('the home has a text My Portfolio', () => {
    const { getByText } = renderWithRouter(<App />);
    const TextHome = getByText(/My Portfolio/i);
    expect(TextHome).toBeInTheDocument();
  });

  it('have menu with text sobre, contato, home, projetos', () => {
    const {getByText} = renderWithRouter(<App />)

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText(/projetos/i)).toBeInTheDocument();
    expect(getByText(/sobre/i)).toBeInTheDocument();
    expect(getByText(/contato/i)).toBeInTheDocument();
  })

  it('Links home render page home', () => {
    const {history} = renderWithRouter(<App />);

    userEvent.click(screen.getByText('Home'));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/');

    const txtPage = screen.getByText('Welcome to my home');
    expect(txtPage).toBeInTheDocument()
  });

  it('Links project render page projetos', () => {
    const {history} = renderWithRouter(<App />)

    fireEvent.click(screen.getByText(/projetos/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/projects');
    
  })

  it('Links about render page sobre', () => {
    const {history} = renderWithRouter(<App />)

    fireEvent.click(screen.getByText(/sobre/i))
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about')
    
  })

  it('Links contact render page contato', () => {
    const {history} = renderWithRouter(<App />)

    fireEvent.click(screen.getByText(/contato/i))
    const pathname = history.location.pathname;
    expect(pathname).toBe('/contact')
    
  })

})
