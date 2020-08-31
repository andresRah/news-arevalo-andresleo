import React from "react";
import { List, Typography, Empty } from "antd";
import { CardNews } from "../CardNews";

const preLoadArray = new Array(10).fill().map((item, index) => index);

const { Title } = Typography;
export const ListNews = ({ news, isLoading }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      loading={isLoading}
      locale={{
        emptyText: (
          <Empty
            imageStyle={{
              verticalAlign: "middle",
              height: 120,
            }}
            description={<Title level={3}>No se encontraron resultados.</Title>}
          />
        ),
      }}
      pagination={{
        onChange: (page) => {
          //isLoading = true;
        },
        pageSize: 10,
      }}
      dataSource={isLoading ? preLoadArray : news}
      renderItem={(item) => <CardNews newInfo={item} isLoading={isLoading} />}
    />
  );
};
