import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import introPic from './assets/SenProj.jpg';
import boardsPic from './assets/boards.jpg';
import mePic from './assets/me.jpg';
import FreshPage from './pages/FreshPage';
import './App.css'

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <img src={mePic} alt="Logo" width="100" />
      </div>

      <div style={{ marginBottom: "200px" }}>
        <h1 style={{fontSize: "80px" }}>Circuits By Carl</h1>
        <img src={introPic} alt="Logo" width="400" />
        <h1 style={{ fontSize: "20px", color: "blue" }}>Design and implimentation: an in depth look at music reated topics</h1>
      </div>

      <div>
        <h1>E_Guitar</h1>
        <img src={boardsPic} alt="Logo" width="600" />
      </div>

      <div className="card">
        <button onClick={() => navigate('/fresh')}>
          See Project
        </button>
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fresh" element={<FreshPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
