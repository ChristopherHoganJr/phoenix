import React, { useState } from "react";

// components
import PrimaryButton from "../components/ui/PrimaryButton";

const Register_Page = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div>
      <h1>Register Page</h1>
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
        <PrimaryButton title='Sign up!' />
      </form>
    </div>
  );
};

export default Register_Page;
