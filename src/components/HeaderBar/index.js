import React from "react";
import { Layout, Input, Row, Col } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./styles.css";

const { Header } = Layout;
const { Search } = Input;

export const HeaderBar = ({ collapsed, onClickToggle }) => {
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
            onSearch={(value) => console.log(value)}
            style={{ verticalAlign: "middle", paddingRight: "17px" }}
            enterButton
          />
        </Col>
      </Row>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu> */}
    </Header>
  );
};
