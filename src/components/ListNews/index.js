import React from "react";
// import { Col, Row } from "antd";
// import { CardNews } from "../CardNews/index";

import { List, Avatar, Space, Skeleton, Image } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { CardNews } from "../CardNews";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://image.flaticon.com/icons/svg/3075/3075976.svg",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const ListNews = ({ news }) => {
  // return (
  //   <Row gutter={[24, 24]}>
  //     {news &&
  //       news.slice(0, 30).map((newItem) => (
  //         <Col className="gutter-row" span={12}>
  //           <CardNews
  //             key={newItem.source_id}
  //             newInfo={newItem}
  //             isLoading={false}
  //           />
  //         </Col>
  //       ))}
  //   </Row>
  // );

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={listData}
      renderItem={(item) => <CardNews newInfo={item} />}
    />
  );
};
