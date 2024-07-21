import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function BuyBtn(props) {
  const { path } = props;
  const navigate = useNavigate();

  return (
   
      <Button variant="primary"
      onClick={() => navigate(path)}
      >Buy</Button>

  );
}

export { BuyBtn };