import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CatIndex from '../pages/CatIndex';
import mockCats from '../mockCats'; // Assuming you have this file with your mock data

describe('<CatIndex />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <CatIndex cats={mockCats} />
      </BrowserRouter>
    );
    expect(screen.getAllByText(`See More Details`).length).toBe(mockCats.length);
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