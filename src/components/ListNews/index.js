import React from "react";
import { Col, Row } from "antd";
import { CardNews } from "../CardNews/index";

export const ListNews = ({ ArrayNews }) => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={12}>
        <CardNews />
      </Col>
      <Col span={12}>
        <CardNews />
      </Col>
      <Col span={12}>
        <CardNews />
      </Col>
      <Col span={12}>
        <CardNews />
      </Col>
      <Col span={12}>
        <CardNews />
      </Col>
      <Col span={12}>
        <CardNews />
      </Col>
    </Row>
  );
};
