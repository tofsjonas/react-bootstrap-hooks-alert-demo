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
        <Col>
          <Button
            variant="primary"
            onClick={() => {
              primary("primary");
            }}
          >
            Primary
          </Button>
        </Col>
        <Col>
          <Button
            variant="success"
            onClick={() => {
              success("success");
            }}
          >
            Success
          </Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            onClick={() => {
              warning("warning");
            }}
          >
            Warning
          </Button>
        </Col>
        <Col>
          <Button
            variant="danger"
            onClick={() => {
              danger("danger");
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
