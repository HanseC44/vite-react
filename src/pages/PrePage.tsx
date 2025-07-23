import { useNavigate } from 'react-router-dom';
import preStage1Pic from '../assets/Stage1_2.png';
import preStage2Pic from '../assets/preStage2_2.png';
import wav1Pic from '../assets/wav1.png';
import wav2Pic from '../assets/wav2.png';
import wav3Pic from '../assets/wav3.png';
import wav4Pic from '../assets/wav4.png';
import prePCBPic from '../assets/prePCB.png';

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
      <h1 style={{ fontSize: "20px", color: "green" }}>Input Wave</h1>
      <img src={wav1Pic} alt="Logo" width="800" />
      <p>A small test signall of 200mV, simulating the wave off a guitar pickup, was applied to the non-inverting input of the OPA134 operational amplifier.</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <h1 style={{ fontSize: "20px", color: "green" }}>Output Wave</h1>
      <img src={wav2Pic} alt="Logo" width="800" />
      <p>The output wave(blue) compared to the imput wave(red).</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <h1 style={{ fontSize: "20px", color: "green" }}>Pre Amp Stage 2</h1>
      <img src={preStage2Pic} alt="Logo" width="800" />
      <p>This is where the guitar signal is amplified to a suitable level to pass onto a power amp. this stage also controls the volume of the overall circuit.</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <h1 style={{ fontSize: "20px", color: "green" }}>Input Wave</h1>
      <img src={wav3Pic} alt="Logo" width="800" />
      <p>A test signal of 2.8V, simulating the wave from the first stage, was applied to the non-inverting input of the OPA134(Amp 2) operational amplifier.</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <h1 style={{ fontSize: "20px", color: "green" }}>Output Wave</h1>
      <img src={wav4Pic} alt="Logo" width="800" />
      <p>The final output wave shown with significant clamping from the diode network</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <h1 style={{ fontSize: "20px", color: "green" }}>Pre PCB Layout</h1>
      <img src={prePCBPic} alt="Logo" width="800" />
      <p>This is the layout for the PCB made in KiCad. I will double check it and then submit the gerber file to JLPCB for fabrication in the next week.</p>
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