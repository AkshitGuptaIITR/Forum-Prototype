import { Button, Modal } from "antd";
import { Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../../Header/Modal/Modal.module.css";

const PostModal = (props) => {
  const { visible, handleCancel, handleOnSubmit } = props;
  const { user } = useSelector((state) => state.user);

  const handlevalidate = (values) => {
    const errors = {};
    if (!values.description) {
      errors.description = "Required!";
    }
  };

  return (
    <Modal
      onCancel={handleCancel}
      visible={visible}
      footer={null}
      title="Create a post"
    >
      <Formik
        validate={handlevalidate}
        onSubmit={handleOnSubmit}
        initialValues={{ description: "", user: user }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="">Add Post Image:</label>
            <input
              type="file"
              id="img"
              onChange={handleChange}
              name="postImage"
              accept="image/*"
              value={values.postImage}
            />
            <label htmlFor="">Caption:</label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={values.description}
            />
            <div className={styles.modalBtn}>
              <Button className={styles.loginBtn} onClick={handleOnSubmit}>
                Create
              </Button>
              <Button onClick={handleCancel} className={styles.cancelBtn}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default PostModal;
