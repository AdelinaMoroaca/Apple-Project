import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ApplyNowBtn(props) {
  const { path } = props;
  const navigate = useNavigate();

  return (
   
    <Button variant="primary"
      onClick={() => navigate(path)}
    >Apply now</Button>

  );
}

export { ApplyNowBtn };