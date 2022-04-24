import React, { useState } from "react";
import style from "./Header.module.css";
import { Input } from "antd";
import {
  SearchOutlined,
  BellFilled,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "antd";

const Header = () => {
  const { isAuth } = useSelector((state) => state.user);
  const {visible, setVisible} = useState(false);

  const handleCancel = () => {
    setVisible(false)
  }

  const handleOpen = () => {
    setVisible(true)
  }

  return (
    <>
    <Modal visible={visible} onCancel={handleCancel}>
      <p>
        asudb
      </p>
    </Modal>
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
            {isAuth ? (
              <>
                <LogoutOutlined style={{ fontSize: 20, marginRight: 8 }} />
                Logout
              </>
            ) : (
              <div onClick={handleOpen}>
                <LoginOutlined style={{ fontSize: 20, marginRight: 8 }} />
                Login
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
