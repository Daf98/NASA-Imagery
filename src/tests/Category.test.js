import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Category from '../components/Category';

const props = {
  name: 'Planets',
  data: 7893,
};

const categoryRender = () => (
  <BrowserRouter>
    <Category
      name={props.name}
      data={props.data}
    />
  </BrowserRouter>
);

test('Category renders information correctly', () => {
  render(<Category name={props.name} data={props.data} />, { wrapper: categoryRender });
  expect(screen.getByText('Planets')).toBeInTheDocument();
});
