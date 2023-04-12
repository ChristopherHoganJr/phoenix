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
        navigate("/");
      })
      .catch((error) => setErrors(error.response.data.error));
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form action=''>
        <div>
          {errors ? <p>{errors}</p> : <></>}
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div>
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
    </div>
  );
};

export default Register_Page;
