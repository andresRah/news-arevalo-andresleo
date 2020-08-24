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

import noticias from "../../avion.png";

const { Sider } = Layout;

export const SideBar = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <Image src={noticias} alt="Logo" className="logo-img" />
        <Typography.Title
          level={4}
          style={{
            visibility: collapsed ? "hidden" : "visible",
            marginLeft: "10px",
          }}
        >
          Acámica News
        </Typography.Title>
      </div>

      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeTwoTone />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<HourglassTwoTone />}>
          Politica
        </Menu.Item>
        <Menu.Item key="3" icon={<DollarCircleTwoTone />}>
          Internacional
        </Menu.Item>
        <Menu.Item key="4" icon={<RocketTwoTone />}>
          Tecnologia
        </Menu.Item>
        <Menu.Item key="5" icon={<StarTwoTone />}>
          Espectaculos
        </Menu.Item>
        <Menu.Item key="6" icon={<TrophyTwoTone />}>
          Deportes
        </Menu.Item>
        <Menu.Item key="7" icon={<SmileTwoTone />}>
          Diseño
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
