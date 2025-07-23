import { useNavigate } from 'react-router-dom';
import powerPic from '../assets/power.png';
import pWav1Pic from '../assets/pWav1.png';
import pWav2Pic from '../assets/pWav2.png';

const PowerPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div style={{ marginBottom: "100px" }}>
      <h1>Circuit Design:</h1>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <h1 style={{ fontSize: "20px", color: "green" }}>Power Amp</h1>
      <img src={powerPic} alt="Logo" width="800" />
      <p></p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <h1 style={{ fontSize: "20px", color: "green" }}>Input Wave</h1>
      <img src={pWav1Pic} alt="Logo" width="800" />
      <p>A 1.5V wave was applied to the input simulating the signal coming from the pre-amp.</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <h1 style={{ fontSize: "20px", color: "green" }}>Output Wave</h1>
      <img src={pWav2Pic} alt="Logo" width="800" />
      <p>The output wave(blue) compared to the imput wave(green).</p>
    </div>

    <div className="card">
      <button onClick={() => navigate('/')}style={{ marginLeft: "30px", backgroundColor: "blue", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px"}}>
        Go Back to Home
      </button>
    </div>
    </>
  );
};

export default PowerPage;