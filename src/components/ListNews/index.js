import React from "react";
import { Col, Row } from "antd";
import { CardNews } from "../CardNews/index";

export const ListNews = ({ news }) => {
  return (
    <Row gutter={[24, 24]}>
      {news &&
        news.slice(0, 30).map((newItem) => (
          <Col className="gutter-row" span={12}>
            <CardNews key={newItem.source_id} newInfo={newItem} />
          </Col>
        ))}
    </Row>
  );
};
