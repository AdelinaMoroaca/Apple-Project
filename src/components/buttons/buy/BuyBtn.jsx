import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styles from './BuyBtn.module.css';

function BuyBtn(props) {
  const { path, className, id } = props;
  const navigate = useNavigate();

  return (
   
      <Button variant="primary"
      id = {id}
      className={`${styles.buyBtn} ${className}`}
      onClick={() => navigate(path)}
      >Buy</Button>

  );
}

export { BuyBtn };