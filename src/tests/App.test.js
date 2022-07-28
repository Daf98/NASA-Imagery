import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import Home from "../components/Home";
import Filter from '../components/Filter';
import store from "../redux/configureStore";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Category from "../components/Category";
import Navbar from "../components/Navbar";

jest.setTimeout(9000);

const bodies = ["Planets", "Black-holes", "Nebulas", "Suns", "Galaxies"];

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should return the path from Planets", async () => {
    for (let i = 0; i < bodies.length; i += 1) {
      await fetch(`https://images-api.nasa.gov/search?q=planet`);
    }
    render(
      // <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
        // </MemoryRouter>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText("Planets"));
      expect(window.location.pathname).toBe("/detail/Planets");
    });
  });

  it("should return the path from Planets", async () => {
    for (let i = 0; i < bodies.length; i += 1) {
      await fetch(`https://images-api.nasa.gov/search?q=planet`);
    }
    render(
      // <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
        // </MemoryRouter>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText("Nebulas"));
      expect(window.location.pathname).toBe("/detail/Nebulas");
    });
  });
});
