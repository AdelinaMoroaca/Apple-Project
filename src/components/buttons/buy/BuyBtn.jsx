import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styles from './buyBtn.module.css';

function BuyBtn(props) {
  const { path, className } = props;
  const navigate = useNavigate();

  return (
   
      <Button variant="primary"
      className={`${styles.buyBtn} ${className}`}
      onClick={() => navigate(path)}
      >Buy</Button>

  );
}

export { BuyBtn };