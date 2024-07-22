import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styles from './learnMoreBtn.module.css';

function LearnMoreBtn(props) {
  const { path, className, id  } = props;
  const navigate = useNavigate();
  
  return (
    <Button variant="primary"
    id= {id}
    className={`${styles.learnMoreBtn} ${className}`}
    onClick={() => navigate(path)}
    >Learn more</Button>
  );
}

export { LearnMoreBtn };