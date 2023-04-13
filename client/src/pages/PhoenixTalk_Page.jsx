import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import SubmitButton from "../components/ui/SubmitButton";

const PhoenixTalk_Page = () => {
  const [post, setPost] = useState("");
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
        console.log(res.data);
      })
      .catch((error) => setErrors(error.response.data.error));
  };

  return (
    <>
      <section className='flex flex-col gap-4 mt-5 px-4'>
        <h1>Phoenix Talk</h1>
        <form>
          <textarea
            className='border-2 border-black w-full h-28 p-2'
            name='post'
            value={post}
            onChange={(e) => setPost(e.target.value)}></textarea>
          <SubmitButton title={"Submit"} submitFunction={submitPost} />
        </form>
      </section>
    </>
  );
};

export default PhoenixTalk_Page;
