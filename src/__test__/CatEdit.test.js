import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import CatEdit from '../pages/CatEdit'; 


const mockCat = {
  id: 1,
  name: "Whiskers",
  age: 3,
  enjoys: "Long naps on the couch",
  image: "http://placekitten.com/200/300"
};

const mockUpdateCat = jest.fn();
const mockNavigate = jest.fn();


jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')), 
  useParams: () => ({
    id: '1'
  }),
  useNavigate: () => mockNavigate
}));

describe('<CatEdit />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatEdit cats={[mockCat]} updateCat={mockUpdateCat} />
      </BrowserRouter>
    );
  });

  it('renders without crashing', () => {
    expect(screen.getByLabelText(/Enter Cat's Name/i)).toBeInTheDocument();
  });

  it('pre-populates the form with cat data', () => {
    expect(screen.getByLabelText(/Enter Cat's Name/i).value).toBe(mockCat.name);
    expect(screen.getByLabelText(/Enter Your Cat's Age/i).value).toBe(mockCat.age.toString());
    expect(screen.getByLabelText(/What does your cat enjoy doing?/i).value).toBe(mockCat.enjoys);
    expect(screen.getByLabelText(/Image URL/i).value).toBe(mockCat.image);
  });

  it('updates state on input change', () => {
    fireEvent.change(screen.getByLabelText(/Enter Cat's Name/i), { target: { value: 'Mr. Fluffy' } });
    fireEvent.change(screen.getByLabelText(/Enter Your Cat's Age/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/What does your cat enjoy doing?/i), { target: { value: 'Playing with yarn' } });
    fireEvent.change(screen.getByLabelText(/Image URL/i), { target: { value: 'http://placekitten.com/200/400' } });

   
    fireEvent.click(screen.getByText(/Submit/i));

   
    waitFor(() => {
      expect(mockUpdateCat).toHaveBeenCalledWith({
        name: 'Mr. Fluffy',
        age: '4',
        enjoys: 'Playing with yarn',
        image: 'http://placekitten.com/200/400'
      }, mockCat.id);
    });
  });
});
