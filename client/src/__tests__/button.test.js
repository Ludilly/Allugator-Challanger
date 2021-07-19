/* eslint-disable import/prefer-default-export */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import FindEmployee from '../pages/FindEmployee';
import reducer from '../Redux/reducer';

export const getStore = (initialState) => {
  if (!initialState) return createStore(reducer);
  return createStore(reducer, initialState);
};

export const renderWithRouterAndStore = (component, routeConfigs = {}, initialState) => {
  const route = routeConfigs.route || '/';
  const store = getStore(initialState);
  const history = routeConfigs.history
    || createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>{component}</Router>
      </Provider>,
    ),
    history,
    store,
  };
};

describe('Verifica o botão no componenente "FindEmployee"', () => {
  it('verifica se há o texto Filtrar', () => {
    const { getByText } = renderWithRouterAndStore(<FindEmployee />);
    const button = getByText('Filtrar');
    expect(button).toBeInTheDocument();
  });
});
