import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';


test("render footer page", () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
            
    );

    expect(screen.getByText(/© 2021 Your Website. All rights reserved./i)).toBeInTheDocument();

});