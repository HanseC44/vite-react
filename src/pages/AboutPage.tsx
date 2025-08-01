import { useNavigate } from 'react-router-dom';
import bDegreePic from '../assets/bDegree.jpg';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div style={{ marginBottom: "100px" }}>
      <h1>About Me</h1>
      <p> 
        Hi, I'm Carl! I'm an Electrical and Computer Engineer with experience in C, Python, and embedded systems.
        I’ve recently started working with React and TypeScript to build modern web apps. 
        I love music technology, guitar electronics, and building projects that blend hardware and software. My 
      </p> 
      <p>
        My recent work includes designing circuit boards for audio applications and developing interactive web interfaces 
        to present engineering projects. I'm currently looking for opportunities where I can contribute to technical innovation, 
        learn from experienced teams, and continue developing as a full-stack or embedded systems engineer.
      </p>
      <p>
        This project is part of an ongoing open-source initiative that I plan to continue developing over time. It’s not a finished product — I’m 
        actively making updates and improvements every day. My goal is to share useful circuit designs, include detailed explanations, part numbers, 
        links, and other helpful resources to support both my own learning and that of others in the community. I welcome feedback and collaboration 
        as the project grows.
      </p>
      <p style={{ marginLeft: "50px" }}>    Kbarisland@gmail.com</p>

    <div style={{ marginTop: "100px" }}>
      <img src={bDegreePic} alt="Logo" width="400" />
    </div>

    </div>
    <div className="card">
      <button onClick={() => navigate('/')}style={{ marginLeft: "30px", backgroundColor: "blue", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px"}}>
        Go Back to Home
      </button>
    </div>
    </>
  );
};

export default AboutPage;