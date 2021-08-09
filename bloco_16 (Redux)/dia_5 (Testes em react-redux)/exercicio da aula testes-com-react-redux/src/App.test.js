import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from './renderWithRedux';
import App from './App';

describe('first tests with redux', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />, 2);

    const buttonAdd = screen.queryByText('add');
    const counterNumber = screen.queryByText(/0/i);

    expect(buttonAdd).toBeInTheDocument();
    expect(counterNumber).toBeInTheDocument();
  })

  test('the page should has a button and a text 5', () => {
    renderWithRedux(<App />, { initialState: {addReducer: {counter: 5}} } );

    const counterNumber = screen.queryByText(/5/i);
    expect(counterNumber).toBeInTheDocument();
  })

  test('button add +1 in state', () => {
    renderWithRedux(<App />, { initialState: {addReducer: {counter: 0}} } );

    const btn = screen.queryByText(/add/i);
    const counterNumber = screen.queryByText(/0/i);
    
    expect(btn).toBeInTheDocument();
    expect(counterNumber).toBeInTheDocument();

    userEvent.click(btn);
    userEvent.click(btn);
    expect(counterNumber).toHaveTextContent(/2/);

    screen.debug();
  })
});
