import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Filter from '../components/Filter';
import store from '../redux/configureStore';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Filter />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
