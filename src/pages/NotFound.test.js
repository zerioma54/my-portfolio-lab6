import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";

test("render 404 page", () => {
    render(

        <BrowserRouter>
        
            <NotFound />
        
        </BrowserRouter>
            
        
    );

    expect(screen.getByText(/404, Page Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/The page you're looking for doesn't exist./i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Go back to home/i })).toBeInTheDocument();
});