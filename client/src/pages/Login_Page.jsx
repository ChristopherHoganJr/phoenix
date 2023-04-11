import React, { useState } from "react";

// components
import PrimaryButton from "../components/ui/PrimaryButton";

const Login_Page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
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
        <PrimaryButton title={"Login"} />
      </form>
    </div>
  );
};

export default Login_Page;
