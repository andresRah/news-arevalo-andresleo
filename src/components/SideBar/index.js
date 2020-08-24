import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export const SideBar = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Política
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Internacional
        </Menu.Item>
        <Menu.Item key="4" icon={<UploadOutlined />}>
          Tecnología
        </Menu.Item>
        <Menu.Item key="5" icon={<UploadOutlined />}>
          Espectaculos
        </Menu.Item>
        <Menu.Item key="6" icon={<UploadOutlined />}>
          Deportes
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
