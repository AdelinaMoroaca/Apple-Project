import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styles from './ApplyNowBtn.module.css';

function ApplyNowBtn(props) {
  const { path, className, id } = props;
  const navigate = useNavigate();

  return (
   
    <Button variant="primary"
      id={id}
      className={`${styles.applyNowBtn} ${className}`}
      onClick={() => navigate(path)}
    >Apply now</Button>

  );
}

export { ApplyNowBtn };