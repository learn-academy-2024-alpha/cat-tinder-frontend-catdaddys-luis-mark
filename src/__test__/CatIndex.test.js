import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CatIndex from './CatIndex';
import mockCats from '../mockCats'; // Assuming you have this file with your mock data

describe('<CatIndex />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <CatIndex cats={mockCats} />
      </BrowserRouter>
    );
    expect(screen.getByText('Cat Index Page')).toBeInTheDocument();
  });

  it('renders cat cards', () => {
    render(
      <BrowserRouter>
        <CatIndex cats={mockCats} />
      </BrowserRouter>
    );
    mockCats.forEach((cat) => {
      expect(screen.getByText(cat.name)).toBeInTheDocument();
    });
  });
});