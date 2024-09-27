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
            _id: currentUser.id,
          },
          text: post,
          like: {
            users: [],
          },
          dislike: {
            users: [],
          },
        };
        setAllPosts([newPost, ...allPosts]);
        setPost("");
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
      <div className="flex flex-col gap-4 mt-5 px-4 items-center justify-center max-w-7xl mx-auto">
        <h1>Phoenix Talk</h1>
        <div className="grid grid-cols-3 w-full">
          <section className="mr-2 talk-container">
            <h2 className="text-center">Your Posts</h2>
            <PostForm post={post} setPost={setPost} submitPost={submitPost} />
            {allPosts ? (
              allPosts
                .filter((e) => e.author._id === currentUser.id)
                .map((e, i) => (
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
              <p>You have not posted anything yet.</p>
            )}
          </section>
          <section className="talk-container">
            <h2 className="text-center">All Posts</h2>

            <div className="flex flex-col gap-4 max-w-md w-full">
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
          <section className=" ml-2 talk-container">
            <h2 className="text-center">Liked Posts</h2>
            {allPosts ? (
              allPosts
                .filter((e) => e.like.users.includes(currentUser.id))
                .map((e, i) => (
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
              <p>You have not liked any posts yet.</p>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default PhoenixTalk_Page;
