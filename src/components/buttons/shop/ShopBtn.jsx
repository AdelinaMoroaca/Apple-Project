import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ShopBtn(props) {
  const { path, product } = props;
  const navigate = useNavigate();

  return (
   
      <Button variant="primary"
      onClick={() => navigate(path)}
      >Shop {product}</Button>

  );
}

export { ShopBtn };