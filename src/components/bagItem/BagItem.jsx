import { Container } from 'react-bootstrap';
// import styles from './BagItem.module.css';

const BagItem = ({bagItem}) => {
    const { name, quantity } = bagItem;
    return (
        <Container>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </Container>
    )
}

export default BagItem;