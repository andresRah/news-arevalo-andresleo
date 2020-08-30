import React from "react";
import { Layout, Input, Row, Col } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./styles.css";

const { Header } = Layout;
const { Search } = Input;

export const HeaderBar = ({ collapsed, onClickToggle, filterWord }) => {
  const handleClickSearch = (inputValue) => {
    filterWord(inputValue);
  };

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Row>
        <Col span={18}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: onClickToggle,
            }
          )}
        </Col>
        <Col span={6}>
          <Search
            placeholder="Buscar noticia..."
            onSearch={handleClickSearch}
            style={{ verticalAlign: "middle", paddingRight: "17px" }}
            enterButton
          />
        </Col>
      </Row>
    </Header>
  );
};
