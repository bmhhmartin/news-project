import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h5>About Us</h5>
                            <p>
                            Your company description or any relevant information can go here.
                            </p>
                        </Col>
                        <Col md={4}>
                            <h5>Contact</h5>
                            <p>Email: contact@example.com</p>
                            <p>Phone: +1 (123) 456-7890</p>
                        </Col>
                        <Col md={4}>
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                            </ul>
                        </Col>
                        <hr />
                        <Col lg={12}>
                            <p className="text-center">
                            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;
