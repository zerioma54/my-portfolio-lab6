import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('renders home page', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    
    
    );

    expect(screen.getByText(/Welcome to My Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/I'm Chioma/i)).toBeInTheDocument();
    expect(screen.getByText(/View My Projects/i)).toBeInTheDocument();

});