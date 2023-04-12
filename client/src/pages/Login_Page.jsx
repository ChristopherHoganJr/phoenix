import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

// components
import SubmitButton from "../components/ui/SubmitButton";

const Login_Page = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const LoginUser = (e) => {
    e.preventDefault();
    axios
      .post("/api/user/login", user, { withCredentials: true })
      .then((res) => {
        setCurrentUser(res.data.currentUser);
        navigate("/");
      })
      .catch((error) => setErrors(error.response.data.error));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form action=''>
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
        <SubmitButton title={"Login"} submitFunction={LoginUser} />
      </form>
    </div>
  );
};

export default Login_Page;
