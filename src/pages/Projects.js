import React from "react";

function Projects() {
    return (
        <div className="container mt-5">
      <h1 className="text-center">My Projects</h1>
      <p>
        Here are some of the projects I have worked on, showcasing my technical skills, problem-solving abilities, and creativity.
      </p>

      <div className="row">
  
        <div className="col-md-6">
          <div className="card my-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Course Information Website</h5>
              <p>Developed a web platform that provides course syllabi and requirements to help Dalhousie students registed in computer science make informed academic decisions.</p>
              <p><strong>Problem Solved:</strong> Lack of centralized information for students selecting computer science coursescourses.</p>
              <p><strong>Technologies:</strong> HTML, CSS, JavaScript, Bootstrap</p>
              <p><strong>My Role:</strong> Frontend Developer</p>
            </div>
          </div>
        </div>

        
        <div className="col-md-6">
          <div className="card my-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Chess Website Enhancement</h5>
              <p>Collaborated on a client-driven project, adding new features and improving the user interface of Dalhousie chess platform.</p>
              <p><strong>Problem Solved:</strong> UI inconsistencies and missing interactive features.</p>
              <p><strong>Technologies:</strong> React.js, JavaScript, Node.js</p>
              <p><strong>My Role:</strong> Junior Developer</p>
            </div>
          </div>
        </div>

       
        <div className="col-md-6">
          <div className="card my-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Drone-Based Inspection (BVLOS Project)</h5>
              <p>Conducted research on Beyond Visual Line of Sight (BVLOS) drone inspections, proposing solutions for automated monitoring.</p>
              <p><strong>Problem Solved:</strong> Improving efficiency in industrial inspection processes.</p>
              <p><strong>Technologies:</strong> Research & Data Analysis, Proposal Development</p>
              <p><strong>My Role:</strong> Research Analyst</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card my-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Content Creator Portfolio</h5>
              <p>Created a personal branding portfolio, showcasing digital content in lifestyle, beauty, and fashion.</p>
              <p><strong>Technologies:</strong> Branding, Social Media Marketing</p>
              <p><strong>My Role:</strong> Content Creator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Projects;