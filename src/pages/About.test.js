import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from './About';

test('renders about page', () => {
    render(
    <BrowserRoute>
        <About />
    </BrowserRoute>
    
);

    expect(screen.getByText(/Education/i)).toBeInTheDocument();
    expect(screen.getByText(/Technical Skills/i)).toBeInTheDocument();
    expect(screen.getByText(/Career Goals/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();

});