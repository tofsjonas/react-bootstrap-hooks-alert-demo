import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Demo from "./components/Demo";
import { AlertProvider, AlertOutlet } from "react-bootstrap-hooks-alert";
import "react-bootstrap-hooks-alert/dist/Alert.css";

function App() {
  return (
    <AlertProvider timeouts={{ warning: 2000, danger: 3000, success: 1000 }}>
      <div className="App">
        <Container>
          <Row>
            <Col>
              <AlertOutlet />
            </Col>
          </Row>
        </Container>
        <header className="App-header">
          <a href="https://github.com/tofsjonas/react-bootstrap-hooks-alert">
            react-bootstrap-hooks-alert
          </a>
          <h1>Demo</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Demo />
        </header>
      </div>
    </AlertProvider>
  );
}

export default App;
