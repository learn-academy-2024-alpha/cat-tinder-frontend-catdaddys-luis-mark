import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CatShow from '../pages/CatShow';
import mockCats from '../mockCats'; // Your mock data

describe('<CatShow />', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={['/catshow/1']}>
        <Routes>
          <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
        </Routes>
      </MemoryRouter> 
         );
         expect(screen.getByText('Chester')).toBeInTheDocument();
       });
     });