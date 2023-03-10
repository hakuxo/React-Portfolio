import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* email form */}
                    <Col  size={12} sm={6}>
                        <div className='socials'>
                            <a href='https://www.linkedin.com/in/jillian-hallmark-026648259/'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                            <a href='https://github.com/hakuxo'><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                            <a href='https://discordapp.com/users/247509558883385345'><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                        </div>
                        <p>copyright things here</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;