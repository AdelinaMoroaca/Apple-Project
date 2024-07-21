import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function GetYourEstimateBtn(props) {
  const { path } = props;
  const navigate = useNavigate();

  return (

      <Button variant="primary"
      onClick={() => navigate(path)}
      >Get your estimation</Button>

  );
}

export { GetYourEstimateBtn };