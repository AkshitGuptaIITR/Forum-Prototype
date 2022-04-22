import React from "react";
import posts from "../../constants/posts";
import Card from "../../HelperComponents/Card";
import style from "./Home.module.css";
import { get } from "lodash";
import profilePic from "../../Assets/profilePic.png";
import noImage from "../../Assets/noImage.png";

const Home = () => {
  return (
    <div className={style.bodyStructure}>
      {posts.map((postData, idx) => {
        return (
          <Card>
            <div className={style.post}>
              <div className={style.user}>
                <img src={get(postData, "user.profile", profilePic)} alt="" />
                <p>{get(postData, "user.name")}</p>
              </div>
              <img src={get(postData, "postImage", noImage)} alt="" />
              <p className={style.description}>{get(postData, "des")}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
