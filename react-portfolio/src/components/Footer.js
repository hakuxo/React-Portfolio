import { Container, Row, Col } from "react-bootstrap";


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* email form */}
                    <Col  size={12} sm={6}>
                        <div className='socials'>
                            <a href='https://www.linkedin.com/in/jillian-hallmark-026648259/'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://github.com/hakuxo'><i class="fa-brands fa-github"></i></a>
                            <a href='https://discordapp.com/users/247509558883385345'><i class="fa-brands fa-discord"></i></a>
                        </div>
                        <p>copyright things here</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;