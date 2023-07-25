import React from "react";
import { Row, Col } from "antd";
import Map from "./components/Map";
import RouteList from "./components/RoutesList";

function App() {
  return (
    <Row>
      <Col span={8}>
        <RouteList />
      </Col>
      <Col span={16}>
        <Map />
      </Col>
    </Row>
  );
}

export default App;
