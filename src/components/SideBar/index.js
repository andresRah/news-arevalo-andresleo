import React from "react";
import { Layout, Menu, Typography, Image } from "antd";
import {
  HomeTwoTone,
  RocketTwoTone,
  TrophyTwoTone,
  DollarCircleTwoTone,
  HourglassTwoTone,
  SmileTwoTone,
  StarTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./styles.css";
import noticias from "../../avion.png";

const { Sider } = Layout;

export const SideBar = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <Image
          src={noticias}
          alt="Logo"
          className={collapsed ? "logo-min" : "logo-img"}
        />
        <Typography.Title
          level={4}
          style={{
            display: collapsed ? "none" : "flex",
            marginLeft: "10px",
          }}
        >
          Acámica News
        </Typography.Title>
      </div>

      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeTwoTone />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<HourglassTwoTone />}>
          <Link to="/category/1">Politica</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DollarCircleTwoTone />}>
          <Link to="/category/2">Internacional</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<RocketTwoTone />}>
          <Link to="/category/3">Tecnologia</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<StarTwoTone />}>
          <Link to="/category/4">Espectaculos</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<TrophyTwoTone />}>
          <Link to="/category/5">Deportes</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<SmileTwoTone />}>
          <Link to="/category/6">Diseño</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
