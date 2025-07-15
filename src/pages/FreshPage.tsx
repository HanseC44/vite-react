import { useNavigate } from 'react-router-dom';

const FreshPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is the fresh new page!</h1>
      <p>Welcome to a separate page from the home screen.</p>

      <button onClick={() => navigate('/')}>
        Go Back to Home
      </button>
    </div>
  );
};

export default FreshPage;
