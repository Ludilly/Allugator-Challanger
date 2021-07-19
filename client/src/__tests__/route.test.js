import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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

describe('Verifica os Links', () => {
  it('verifica a rota "/create"', () => {
    const { getByText, history } = renderWithRouterAndStore(<FindEmployee />);
    const link = getByText('Create Employee');
    fireEvent.click(link);
    expect(history.location.pathname).toBe('/create');
  });
  it('verifica a rota "/delete"', () => {
    const { getByText, history } = renderWithRouterAndStore(<FindEmployee />);
    const link = getByText('Delete Employee');
    fireEvent.click(link);
    expect(history.location.pathname).toBe('/delete');
  });
});
