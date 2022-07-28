import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

jest.setTimeout(9000);

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should return the path from Planets', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    waitFor(() => {
      expect(screen.findByText('CELESTIAL').toBeInTheDocument());
    });
  });
});
