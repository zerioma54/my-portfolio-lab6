import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Projects from './Projects';


test("render Projects page", () => {
    render(
        <BrowserRouter>
            <Projects />
        </BrowserRouter>
        
    );

    expect(screen.getByText(/My Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Course Information Website/i)).toBeInTheDocument();
    expect(screen.getByText(/Chess Website Enhancement/i)).toBeInTheDocument();
    expect(screen.getByText(/Drone-Based Inspection (BVLOS Project)/i)).toBeInTheDocument();
    expect(screen.getByText(/Content Creator Portfolio/i)).toBeInTheDocument();

});