import React from "react";
import { Col, Row } from "antd";
import { CardNews } from "../CardNews/index";

const style = { background: "#0092ff", padding: "8px 0" };

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
    // <Row gutter={[24, 24]}>
    //   <Col className="gutter-row" span={12}>
    //     <div style={style}>col-6</div>
    //   </Col>
    //   <Col className="gutter-row" span={12}>
    //     <div style={style}>col-6</div>
    //   </Col>
    //   <Col className="gutter-row" span={12}>
    //     <div style={style}>col-6</div>
    //   </Col>
    //   <Col className="gutter-row" span={12}>
    //     <div style={style}>col-6</div>
    //   </Col>
    //   <Col className="gutter-row" span={12}>
    //     <div style={style}>col-6</div>
    //   </Col>
    //   <Col className="gutter-row" span={12}>
    //     <div style={style}>col-6</div>
    //   </Col>
    //   <Col className="gutter-row" span={12}>
    //     <div style={style}>col-6</div>
    //   </Col>
    //   <Col className="gutter-row" span={12}>
    //     <div style={style}>col-6</div>
    //   </Col>
    //   <Col className="gutter-row" span={12}>
    //     <div style={style}>col-6</div>
    //   </Col>
    //   <Col className="gutter-row" span={12}>
    //     <div style={style}>col-6</div>
    //   </Col>
    //   <Col className="gutter-row" span={12}>
    //     <div style={style}>col-6</div>
    //   </Col>
    // </Row>
  );
};
