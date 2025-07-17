import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="card">
      <button onClick={() => navigate('/')}>
        Go Back to Home
      </button>
    </div>
    </>
  );
};

export default AboutPage;