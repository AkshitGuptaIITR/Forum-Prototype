import React from "react";
import style from "./Header.module.css";
import { Input } from "antd";
import { SearchOutlined, BellFilled, LoginOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className={style.headerStructure}>
      <h1>Home</h1>
      <Input
        style={{ width: "40%" }}
        size="large"
        placeholder="Search"
        prefix={<SearchOutlined />}
      />
      <div className={style.icons}>
        <div>
          <BellFilled style={{ fontSize: 20, marginRight: 8 }} />
          Notification
        </div>
        <div>
          <LoginOutlined style={{ fontSize: 20, marginRight: 8 }} />
          Login
        </div>
      </div>
    </div>
  );
};

export default Header;
