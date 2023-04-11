import React, { useState } from "react";

// components
import PrimaryButton from "../components/ui/PrimaryButton";

const Login_Page = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  return (
    <div>
      <h1>Login Page</h1>
      <form action=''>
        <div>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
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
        <PrimaryButton title={"Login"} />
      </form>
    </div>
  );
};

export default Login_Page;
