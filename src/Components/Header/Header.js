import React, { useState } from "react";
import style from "./Header.module.css";
import { Input, notification } from "antd";
import {
  SearchOutlined,
  BellFilled,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import users from "../../constants/users";
import { setAuth, setLogout } from "../../store/authSlice";
import HomeModal from "./Modal/Modal";

const Header = () => {
  const { isAuth } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOpen = () => {
    setVisible(true);
  };

  const handleLogout = () => {
    dispatch(setLogout());
    notification.success({
      message: "Logged Out Successfully!",
    });
  };

  const handleOnSubmit = (values) => {
    // eslint-disable-next-line array-callback-return
    users.filter((value) => {
      if (value.email === values.email && value.password === values.password) {
        notification.success({
          message: "Logged in successfully!",
        });
        setVisible(false);
        dispatch(
          setAuth({
            user: value,
          })
        );
      } else {
        notification.warn({
          message: "Please provide correct email/password.",
        });
      }
    });
  };

  return (
    <>
      <HomeModal
        visible={visible}
        handleCancel={handleCancel}
        handleOnSubmit={handleOnSubmit}
      />
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
              <div onClick={handleLogout}>
                <LogoutOutlined style={{ fontSize: 20, marginRight: 8 }} />
                Logout
              </div>
            ) : (
              <div onClick={handleOpen}>
                <LoginOutlined style={{ fontSize: 20, marginRight: 8 }} />
                Login/Signup
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
