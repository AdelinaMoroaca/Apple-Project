import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styles from './ShopBtn.module.css';

function ShopBtn(props) {
  const { path, product, className, id } = props;
  const navigate = useNavigate();

  return (
   
      <Button variant="primary"
      id={id}
      className={`${styles.shopBtn} ${className}`}
      onClick={() => navigate(path)}
      >Shop {product}</Button>

  );
}

export { ShopBtn };