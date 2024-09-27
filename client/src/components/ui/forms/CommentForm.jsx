import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import SubmitButton from "../SubmitButton";
import General_Comment from "../comments/General_Comment";

const CommentForm = ({ post, currentUser }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/comment/${post._id}`, { withCredentials: true })
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, []);

  const submitComment = (e) => {
    e.preventDefault();
    let newComment = {
      author: currentUser.id,
      text: comment,
      post: post._id,
    };
    axios
      .post(`/api/comment/${post._id}`, newComment, { withCredentials: true })
      .then((res) =>
        setComments([
          ...comments,
          {
            _id: res.data._id,
            author: {
              username: currentUser.username,
              _id: currentUser.id,
            },
            text: res.data.text,
            like: {
              users: [],
            },
            dislike: {
              users: [],
            },
          },
        ])
      )
      .catch((err) => console.log(err));
  };
  console.log(comments.length);
  return (
    <div className="">
      <form>
        <label className="">Add comment</label>
        <textarea
          className="border-2 border-black w-full h-28 p-2 mb-2 mt-2"
          name="post"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <SubmitButton title={"Respond"} submitFunction={submitComment} />
      </form>
      <div className=" border-black mt-4 flex flex-col gap-2">
        {comments.length > 0 ? (
          comments.map((e, i) => (
            <General_Comment
              key={i}
              idx={i}
              _id={e._id}
              author={e.author}
              text={e.text}
              like={e.like}
              dislike={e.dislike}
              createdAt={e.createdAt}
              currentUser={currentUser}
              setComments={setComments}
              comments={comments}
            />
          ))
        ) : (
          <p>no comments yet</p>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
