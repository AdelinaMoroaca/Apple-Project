import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styles from './getYourEstimateBtn.module.css';

function GetYourEstimateBtn(props) {
  const { path, className, id } = props;
  const navigate = useNavigate();

  return (

      <Button variant="primary"
      id={id}
      className={`${styles.getYourEstimateBtn} ${className}`}
      onClick={() => navigate(path)}
      >Get your estimation</Button>

  );
}

export { GetYourEstimateBtn };