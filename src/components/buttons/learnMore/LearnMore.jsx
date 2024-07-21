import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function LearnMoreBtn(props) {
  const { path } = props;
  const navigate = useNavigate();
  
  return (
    <Button variant="primary"
    onClick={() => navigate(path)}
    >Learn more</Button>
  );
}

export { LearnMoreBtn };