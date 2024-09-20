import {Layout} from '../../components/Layout';
import { Container, Col, Row } from 'react-bootstrap';
import SignInForm from '../../components/signInForm/SignInForm';
import SignUpForm from '../../components/signUpForm/SignUpForm';
import styles from './Authentification.module.css';

function Authentification(){
    return(
        <Layout bgThemeVariant="light" iconColor="gray">
            <Container className={styles.authenticationContainer}>
                <Row>
                    <Col md={6} xs={12}>
                        <SignInForm />
                    </Col>

                    <Col md={6} xs={12}>
                        <SignUpForm />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Authentification;