import React from 'react';
function Home() {
    return (
        <div className="container text-center mt-5 homepage-content">
            <h1 className="text-primary">Welcome to My Portfolio!</h1>
            <h3 className="text-secondary">Hi, I'm Chioma</h3>
            <p>I'm a web developer that strive to create user-friendly websites and applications</p>
            <p>Feel free to explore my portfolio!!</p>

            <a href="/projects" className="btn btn-success btn-lg">View My Projects</a>
        </div>
    );
};

export default Home;
