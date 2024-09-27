import React from "react";

// components
import SubmitButton from "../SubmitButton";

const PostForm = ({ post, setPost, submitPost }) => {
  return (
    <form className="max-w-md w-full flex flex-col gap-4 border-b-4 border-black pb-4">
      <label>Add post</label>
      <textarea
        className="border-2 border-black w-full h-28 p-2"
        name="post"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      ></textarea>
      <SubmitButton title={"Say it!"} submitFunction={submitPost} />
    </form>
  );
};

export default PostForm;
