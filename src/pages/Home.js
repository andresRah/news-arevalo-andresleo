import React, { useState } from "react";
import "./styles.css";
import { Layout } from "antd";
import { SideBar } from "../components/SideBar/index";
import { HeaderBar } from "../components/HeaderBar/index";
import { ListNews } from "../components/ListNews/index";

const { Content } = Layout;

export const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <SideBar collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderBar collapsed={collapsed} onClickToggle={toggle} />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 800,
          }}
        >
          <ListNews />
        </Content>
      </Layout>
    </Layout>
  );
};
