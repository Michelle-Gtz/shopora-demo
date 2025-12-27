import { Container, Col, Row } from "react-bootstrap";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Shopora &copy; {currentYear}</Col>
        </Row>
      </Container>
    </footer>
  );
}
