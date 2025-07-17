import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import introPic from './assets/SenProj.jpg';
import boardsPic from './assets/boards.jpg';
import mePic from './assets/me.jpg';
import FreshPage from './pages/FreshPage';
import AboutPage from './pages/AboutPage';
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
      <div style={{ display: "flex", alignItems: "center", textAlign: "left" }}>
        <img src={mePic} alt="Logo" width="100" />
        <p style={{ marginLeft: "50px" }}>    Kbarisland@gmail.com</p>
        <button onClick={() => navigate('/about')}style={{ marginLeft: "300px", backgroundColor: "blue", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px"}}>
          About
        </button>
      </div>

      <div style={{ marginBottom: "100px" }}>
        <h1 style={{color: "green", fontSize: "80px" }}>Circuits By Carl</h1>
        <img src={introPic} alt="Logo" width="800" />
      </div>

      <div>
        <h1 style={{color: "green", fontSize: "40px" }}>E_Guitar</h1>
        <img src={boardsPic} alt="Logo" width="600" />
      </div>

      <div className="card">
        <button onClick={() => navigate('/fresh')}style={{ marginLeft: "30px", backgroundColor: "blue", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px"}}>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App
