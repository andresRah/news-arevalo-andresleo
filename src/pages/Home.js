import React, { useEffect, useState } from "react";
import "./styles.css";
import { Layout, Empty, Typography } from "antd";
import { SideBar } from "../components/SideBar/index";
import { HeaderBar } from "../components/HeaderBar/index";
import { ListNews } from "../components/ListNews/index";
import { getCurrentDate } from "../utils/date";
import { useParams } from "react-router-dom";

const { Content } = Layout;
const { Title } = Typography;

export const Home = ({
  onGetNews,
  onGetNewsByCategory,
  onGetNewsByFilterWord,
  news,
  hasError,
  isLoading,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    GetNewsByDate(onGetNews);
  }, []);

  useEffect(() => {
    if (id) {
      onGetNewsByCategory(id);
      return;
    }

    GetNewsByDate(onGetNews);
  }, [id]);

  const GetNewsByDate = (onGetNews) => {
    let currentDate = getCurrentDate();
    onGetNews(currentDate);
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <SideBar collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderBar
          collapsed={collapsed}
          onClickToggle={toggle}
          filterWord={onGetNewsByFilterWord}
        />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 800,
          }}
        >
          {/* {(hasError || !news || news.length === 0) && !isLoading && (
            <Empty
              imageStyle={{
                verticalAlign: "middle",
                height: 120,
              }}
              description={
                <Title level={3}>No se encontraron resultados.</Title>
              }
            />
          )} */}
          <ListNews news={news} />
        </Content>
      </Layout>
    </Layout>
  );
};
