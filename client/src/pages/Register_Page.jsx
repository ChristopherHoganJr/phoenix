import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

// components
import SubmitButton from "../components/ui/SubmitButton";

const Register_Page = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState("");

  const RegisterUser = (e) => {
    e.preventDefault();
    axios
      .post("/api/user/register", user, { withCredentials: true })
      .then((res) => {
        setCurrentUser(res.data.currentUser);
        navigate("/phoenix");
      })
      .catch((error) => setErrors(error.response.data.error));
  };

  return (
    <section className='pt-5 px-4 flex flex-col gap-4'>
      <h1 className='text-center'>Become a member</h1>
      <img src='/imgs/registerImg.jpg' alt='' />
      <form action='' className='flex flex-col gap-4'>
        {errors ? <p>{errors}</p> : <></>}
        <div className='flex flex-col'>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className='flex flex-col'>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className='flex flex-col'>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className='flex flex-col'>
          <label>Confirm Password:</label>
          <input
            type='password'
            name='confirmPassword'
            value={user.confirmPassword}
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
        </div>
        <SubmitButton title='Sign up!' submitFunction={RegisterUser} />
      </form>
    </section>
  );
};

export default Register_Page;
