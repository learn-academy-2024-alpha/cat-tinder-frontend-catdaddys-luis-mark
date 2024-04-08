import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CatModel from '../pages/CatModel';
import { BrowserRouter } from "react-router-dom"

describe('<CatModel />', () => {
    test('renders without crashing', () => {
      render(
        <BrowserRouter>
          <CatModel />
        </BrowserRouter>
      );
      expect(screen.getAllByText("Possibly In Your Area")).toHaveLength(9); // Assuming you expect 9 such links
    });
  });
  