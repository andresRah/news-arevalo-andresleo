import React from "react";
import { Skeleton, Image, Tag, List, Avatar, Space, Typography } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { formatDate } from "../../utils/date";
import "./style.css";

const defaultImageURL = "https://image.flaticon.com/icons/svg/3076/3076074.svg";
const avatarUrl = "https://image.flaticon.com/icons/svg/3075/3075976.svg";
const { Title } = Typography;

export const CardNews = ({ newInfo, isLoading }) => {
  const { category, date, img_url, source_name, title, url } = newInfo;

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <List.Item
      key={title}
      actions={[
        <Skeleton loading={isLoading} active>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <IconText
              icon={LinkOutlined}
              text={`Leer más en ${source_name}`}
              key="list-vertical-star-o"
            />
          </a>
        </Skeleton>,
      ]}
      extra={
        isLoading ? (
          <Skeleton.Image />
        ) : (
          <Image
            width={272}
            alt="logo"
            src={img_url ? img_url : defaultImageURL}
          />
        )
      }
    >
      <Skeleton avatar title={false} loading={isLoading} active>
        <List.Item.Meta
          avatar={<Avatar src={avatarUrl} />}
          title={
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Title level={4}>{title}</Title>
            </a>
          }
          description={
            <div>
              <Tag color="blue">{category ? category : "Todas"}</Tag>
              {formatDate(date)}
            </div>
          }
        />
        {title}
      </Skeleton>
    </List.Item>
  );
};
