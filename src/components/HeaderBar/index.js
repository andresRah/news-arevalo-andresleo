import React from "react";
import { Layout } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./styles.css";

const { Header } = Layout;

export const HeaderBar = ({ collapsed, onClickToggle }) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: onClickToggle,
      })}
    </Header>
  );
};
