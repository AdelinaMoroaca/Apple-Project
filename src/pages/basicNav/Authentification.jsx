import {Layout} from '../../components/Layout';
import { Container } from 'react-bootstrap';
import SignInForm from '../../components/signInForm/SignInForm';
import SignUpForm from '../../components/signUpForm/SignUpForm';
import styles from './Authentification.module.css';

function Authentification(){
    return(
        <Layout bgThemeVariant="light" iconColor="gray">
            <Container className={styles.authenticationContainer}>
                <SignInForm/>
                <SignUpForm/>
            </Container>
        </Layout>
    )
}

export default Authentification;