import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styles from './ShopBtn.module.css';

function ShopBtn(props) {
  const { path, product, className, id } = props;
  const navigate = useNavigate();

  function handleOnClick(){
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
      <Button variant="primary"
      id={id}
      className={`${styles.shopBtn} ${className}`}
      onClick={handleOnClick}
      >Shop {product}</Button>
  );
}

export { ShopBtn };