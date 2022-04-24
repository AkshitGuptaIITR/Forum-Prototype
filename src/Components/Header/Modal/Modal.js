import React from "react";
import style from "./Modal.module.css";
import { Button, Modal } from "antd";
import { Formik } from "formik";

const HomeModal = (props) => {
  const { visible, handleCancel, handleOnSubmit } = props;

  const handleValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  return (
    <Modal
      title="Login"
      visible={visible}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        validate={handleValidate}
        initialValues={{ email: "", password: "" }}
        onSubmit={handleOnSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={values.email}
              style={{
                borderColor: `${errors.email ? "red" : "inherit"}`,
                backgroundColor: `${
                  errors.email ? "rgba(255,0,0,0.2)" : "inherit"
                }`,
              }}
              onChange={handleChange}
            />
            <label htmlFor="">Password:</label>
            <input
              type="password"
              value={values.password}
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
            <p>Didn't have account? Create One!</p>
            <div className={style.modalBtn}>
              <Button
                typeof="submit"
                className={style.loginBtn}
                onClick={handleSubmit}
              >
                Login
              </Button>
              <Button onClick={handleCancel} className={style.cancelBtn}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default HomeModal;
