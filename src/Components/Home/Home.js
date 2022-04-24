import React, { useState } from "react";
import posts from "../../constants/posts";
import Card from "../../HelperComponents/Card/Card";
import style from "./Home.module.css";
import { get } from "lodash";
import profilePic from "../../Assets/profilePic.png";
import noImage from "../../Assets/noImage.png";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { useSelector } from "react-redux";
import { GrAddCircle } from "react-icons/gr";
import PostModal from "./Modal/PostModal";

const Home = () => {
  const [likedIndex, setLikedIndex] = useState([]);
  const [dislikedIndex, setDisLikedIndex] = useState([]);
  const { isAuth } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);

  const handleLike = (index) => {
    if (likedIndex.includes(index)) {
      var array = likedIndex.filter((value) => {
        if (value === index) {
          return null;
        }
        return value;
      });
      setLikedIndex(array);
    } else if (dislikedIndex.includes(index)) {
      handleDislike(index);
      setLikedIndex([...likedIndex, index]);
    } else {
      setLikedIndex([...likedIndex, index]);
    }
  };

  const handleDislike = (index) => {
    if (dislikedIndex.includes(index)) {
      var array = dislikedIndex.filter((value) => {
        if (value === index) {
          return null;
        }
        return value;
      });
      setDisLikedIndex(array);
    } else if (likedIndex.includes(index)) {
      handleLike(index);
      setDisLikedIndex([...dislikedIndex, index]);
    } else {
      setDisLikedIndex([...dislikedIndex, index]);
    }
  };

  const handleVisible = () => {
    setVisible(!visible)
  }

  const handleOnSubmit = () => {
    
  }

  return (
    <div className={style.bodyStructure}>
    <PostModal visible={visible} handleCancel={handleVisible} handleOnSubmit={handleOnSubmit} />
      {isAuth ? (
        <Card onClick={handleVisible}>
          <div className={style.createPost}>
            <GrAddCircle style={{ width: 24, height: 24 }} />
            <b>Create Post</b>
          </div>
        </Card>
      ) : null}
      {posts.map((postData, idx) => {
        return (
          <Card key={get(postData, "id")}>
            <div className={style.post}>
              <div className={style.user}>
                <img src={get(postData, "user.profile", profilePic)} alt="" />
                <p>{get(postData, "user.name")}</p>
              </div>
              <div className={style.postData}>
                <div className={style.postImage}>
                  <img src={get(postData, "postImage", noImage)} alt="" />
                </div>
                <p className={style.description}>
                  {get(postData, "description")}
                </p>
              </div>
              <div className={style.lowerComponent}>
                {!likedIndex.includes(idx) ? (
                  <BiLike
                    className={style.icons}
                    onClick={() => handleLike(idx)}
                  />
                ) : (
                  <AiTwotoneLike
                    style={{ color: "#D9534F" }}
                    className={style.icons}
                    onClick={() => handleLike(idx)}
                  />
                )}
                {!dislikedIndex.includes(idx) ? (
                  <BiDislike
                    className={style.icons}
                    onClick={() => handleDislike(idx)}
                  />
                ) : (
                  <AiTwotoneDislike
                    // style={{color: '#0C1E7F'}}
                    className={style.icons}
                    onClick={() => handleDislike(idx)}
                  />
                )}
                <FaRegCommentAlt className={style.icons} />
              </div>
              <div className={style.commentComponent}>
                {postData.comments.map((data) => {
                  return (
                    <div className={style.post}>
                      <div className={style.user}>
                        <img
                          src={get(data, "user.profile", profilePic)}
                          alt=""
                        />
                        <p>{get(data, "user.name")}</p>
                      </div>
                      <p>{get(data, "comment")}</p>
                    </div>
                  );
                })}
                <div className={style.lowerComponent}>
                  {!likedIndex.includes(idx) ? (
                    <BiLike
                      className={style.icons}
                      onClick={() => handleLike(idx)}
                    />
                  ) : (
                    <AiTwotoneLike
                      style={{ color: "#D9534F" }}
                      className={style.icons}
                      onClick={() => handleLike(idx)}
                    />
                  )}
                  {!dislikedIndex.includes(idx) ? (
                    <BiDislike
                      className={style.icons}
                      onClick={() => handleDislike(idx)}
                    />
                  ) : (
                    <AiTwotoneDislike
                      // style={{color: '#0C1E7F'}}
                      className={style.icons}
                      onClick={() => handleDislike(idx)}
                    />
                  )}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
