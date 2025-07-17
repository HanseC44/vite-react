import { useNavigate } from 'react-router-dom';
import mcuTopPic from '../assets/mcuTop.png';
import mcuBottomPic from '../assets/mcuBottom.png';
import dCapsPic from '../assets/dCaps.png';
import linRegPic from '../assets/linReg.png';
import chargePic from '../assets/charge.png';
import audioAmpPic from '../assets/audioAmp.png';
import pcbPic from '../assets/pcb.png';

const FreshPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div style={{ marginBottom: "100px" }}>
      <h1>Circuit Design:</h1>
      <p>MCU Top</p>
      <img src={mcuTopPic} alt="Logo" width="800" />
      <p>The microcontroller being used is an STM32H723ZG. This shows the VDD_MCU connection, the clock, </p>
      <p>The ST-Link headers, The Dac pins and some of the GPIO pins used for touch sensing</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <p>MCU Bottom</p>
      <img src={mcuBottomPic} alt="Logo" width="800" />
      <p>This shows all the rest of the GPIO pin connections, the SDMMC connections and the I2c connections.</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <p>Decoupling Capacitors</p>
      <img src={dCapsPic} alt="Logo" width="800" />
      <p>These capacitors will be placed around the MCU to stabalize voltage and reduce noise.</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <p>Linear Regulator</p>
      <img src={linRegPic} alt="Logo" width="800" />
      <p>The Linear regulator is responsible for taking the changing voltage from the battery and turning it into 3.3 volts.</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <p>Charge Circuit</p>
      <img src={chargePic} alt="Logo" width="800" />
      <p>This circuit is responsible for charging the LIPO battery from USB type B and boosting the 3.3 volts to 5 volts for </p>
      <p>the audio amplifier.</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <p>Audio Amplifiers</p>
      <img src={audioAmpPic} alt="Logo" width="800" />
      <p>Texas instrument Opa134 opamps were used but set up wrong.</p>
    </div>

    <div style={{ marginBottom: "100px" }}>
      <p>PCB Layout</p>
      <img src={pcbPic} alt="Logo" width="800" />
      <p>PCB layout was designed in KiCad</p>
    </div>

    <div className="card">
      <button onClick={() => navigate('/')}>
        Go Back to Home
      </button>
    </div>
    </>
  );
};

export default FreshPage;
