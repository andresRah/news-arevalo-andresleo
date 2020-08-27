import React, { useEffect, useState } from "react";
import "./styles.css";
import { Layout } from "antd";
import { SideBar } from "../components/SideBar/index";
import { HeaderBar } from "../components/HeaderBar/index";
import { ListNews } from "../components/ListNews/index";
import { getCurrentDate } from "../utils/date";

const { Content } = Layout;

export const Home = ({ onGetNews, news, hasError, isLoading }) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    let currentDate = getCurrentDate();
    onGetNews(currentDate);
  }, []);

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
          {isLoading ? <h1>Loading...</h1> : <ListNews news={news} />}
          {hasError && <h1>Error loading data</h1>}
        </Content>
      </Layout>
    </Layout>
  );
};
