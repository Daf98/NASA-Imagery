import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

jest.setTimeout(9000);

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const { container } = render(
        <Provider store={store}>
          <App />
        </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should return text from the Planets page', async () => {
    const bodies = [
      'Planets',
      'Black-holes',
      'Nebulas',
      'Suns',
      'Galaxies',
    ];
      for (let i = 0; i < bodies.length; i += 1) {
        await fetch(`https://images-api.nasa.gov/search?q=${bodies[i]}`);
      }
    render(
        <Provider store={store}>
          <App />
        </Provider>
    );
    await waitFor(() => {
      fireEvent.click(screen.getByText(/Planets/));
      const waitForDom = screen.getByText(/List of Planets/i);
      expect(waitForDom).toBeInTheDocument();
    });
  });
});
