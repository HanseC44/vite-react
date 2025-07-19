import { useNavigate } from 'react-router-dom';
import preStage1Pic from '../assets/preStage1.png';
import preStage2Pic from '../assets/preStage2.png';

const PrePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div style={{ marginBottom: "100px" }}>
      <h1>Circuit Design</h1>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <h1 style={{ fontSize: "20px", color: "green" }}>Pre Amp Stage 1</h1>
      <img src={preStage1Pic} alt="Logo" width="800" />
      <p>This is where the guitar will plug in and take the small signal and start running it through a series of filters for tone control.</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <h1 style={{ fontSize: "20px", color: "green" }}>Pre Amp Stage 2</h1>
      <img src={preStage2Pic} alt="Logo" width="800" />
      <p>This is where the guitar the signal is amplified to a suitable level to pass onto a power amp. this stage also controls the volume of the overall circuit.</p>
    </div>

    <div className="card">
      <button onClick={() => navigate('/')}style={{ marginLeft: "30px", backgroundColor: "blue", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px"}}>
        Go Back to Home
      </button>
    </div>

    </>
  );
};

export default PrePage;