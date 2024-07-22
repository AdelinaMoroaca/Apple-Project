import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styles from './LearnMoreBtn.module.css';

function LearnMoreBtn(props) {
  const { path, className  } = props;
  const navigate = useNavigate();
  
  return (
    <Button variant="primary"
    className={`${styles.learnMoreBtn} ${className}`}
    onClick={() => navigate(path)}
    >Learn more</Button>
  );
}

export { LearnMoreBtn };