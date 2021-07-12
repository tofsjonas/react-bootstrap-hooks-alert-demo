import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useAlert } from "react-bootstrap-hooks-alert";

const Demo = () => {
  const { primary, success, danger, warning } = useAlert();

  return (
    <Container>
      <Row>
        <Col className="m-3">
          <Button
            variant="primary"
            onClick={() => {
              primary("No timeout here, click me away!");
            }}
          >
            Primary
          </Button>
        </Col>
        <Col className="m-3">
          <Button
            variant="success"
            onClick={() => {
              success("One second timeout");
            }}
          >
            Success
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="m-3">
          <Button
            variant="warning"
            onClick={() => {
              warning("Two seconds timeout");
            }}
          >
            Warning
          </Button>
        </Col>
        <Col className="m-3">
          <Button
            variant="danger"
            onClick={() => {
              danger("Three seconds timeout");
            }}
          >
            Danger
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Demo;
