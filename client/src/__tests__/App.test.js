/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../App';
import reduxStore from '../Redux/store/store';
import reducer from '../Redux/reducer';

export const getStore = (initialState) => {
  if (!initialState) return createStore(reducer);
  return createStore(reducer, initialState);
};

const renderWithRedux = (
  component,
  { initialState, store = getStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  reduxStore,
});

describe('Verifica se o titulo do App', () => {
  it('verifica se há Find employees data', () => {
    const { getByText } = renderWithRedux(<App />);
    const heading = getByText('Find employees data');
    expect(heading).toBeInTheDocument();
  });
});
