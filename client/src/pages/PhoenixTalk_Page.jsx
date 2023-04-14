import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// components
import PostForm from "../components/ui/forms/PostForm";
import General_Post from "../components/ui/posts/General_Post";

const PhoenixTalk_Page = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const [post, setPost] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [errors, setErrors] = useState("");

  const submitPost = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "/api/post",
        { text: post },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        let newPost = {
          _id: res.data._id,
          author: {
            username: currentUser.username,
          },
          text: post,
          like: {
            users: [],
          },
          dislike: {
            users: [],
          },
        };
        setAllPosts([...allPosts, newPost]);
      })
      .catch((error) => setErrors(error.response.data.error));
  };

  useEffect(() => {
    axios
      .get("/api/posts", { withCredentials: true })
      .then((res) => setAllPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className='flex flex-col gap-4 mt-5 px-4'>
        <h1>Phoenix Talk</h1>
        <PostForm post={post} setPost={setPost} submitPost={submitPost} />
        <div className='flex flex-col gap-4'>
          {allPosts ? (
            allPosts?.map((e, i) => (
              <General_Post
                key={i}
                idx={i}
                post={e}
                currentUser={currentUser}
                allPosts={allPosts}
                setAllPosts={setAllPosts}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};

export default PhoenixTalk_Page;
