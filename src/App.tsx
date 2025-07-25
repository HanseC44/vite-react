import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import introPic from './assets/SenProj.png';
import boardsPic from './assets/boards.jpg';
import mePic from './assets/me.jpg';
import prePic from './assets/pre.jpg';
import FreshPage from './pages/FreshPage';
import AboutPage from './pages/AboutPage';
import PrePage from './pages/PrePage';
import PowerPage from './pages/PowerPage';
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <a href="https://github.com/HanseC44/vite-react" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      <div style={{ display: "flex", alignItems: "center", textAlign: "left" }}>
        <img src={mePic} alt="Logo" width="100" />
        <button onClick={() => navigate('/about')}style={{ marginLeft: "30px", backgroundColor: "blue", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px"}}>
          About
        </button>
      </div>

      <div style={{ marginBottom: "100px" }}>
        <h1 style={{color: "green", fontSize: "80px" }}>Circuits By Carl</h1>
        <img src={introPic} alt="Logo" width="800" />
      </div>

      <div>
        <h1 style={{color: "green", fontSize: "50px" }}>E_Guitar</h1>
        <img src={boardsPic} alt="Logo" width="600" />
        <p>This was my senior capstone project. It is essentially a stringless guitar that utilizes touch sensors for fret input. This project was for the most part, a sucess.
          some more work needs to be done on the buffer to sense multiple touches at once.
        </p>
      </div>

      <div className="card">
        <button onClick={() => navigate('/fresh')}style={{ marginLeft: "30px", backgroundColor: "blue", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px"}}>
          See Project
        </button>
      </div>

      <div style={{ marginTop: "100px" }}>
        <h1 style={{color: "green", fontSize: "50px" }}>Guitar Pre-Amp</h1>
        <img src={prePic} alt="Logo" width="600" />
        <p>This circuit will be the pre-amp for a guitar amplfier. The above pictured PCB was my first attempt but the project will outline a begining to end new attempt.</p>
      </div>

      <div className="card">
        <button onClick={() => navigate('/pre')}style={{ marginLeft: "30px", backgroundColor: "blue", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px"}}>
          See Project
        </button>
      </div>

      <div style={{ marginTop: "100px" }}>
        <h1 style={{color: "green", fontSize: "50px" }}>Guitar Power-Amp</h1>
        <p>This circuit will be the power-amp for a guitar amplfier. So far, all I have done is found a power amp from Elliot Sounds and built it in Kicad. I had to write some spice models
          for the TIP35C and TIP36C BJTs. Simulation was sucessfull and I am excited to explore this circuit more!
        </p>
      </div>

      <div className="card">
        <button onClick={() => navigate('/power')}style={{ marginLeft: "30px", backgroundColor: "blue", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px"}}>
          See Project
        </button>
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fresh" element={<FreshPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pre" element={<PrePage />} />
        <Route path="/power" element={<PowerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
