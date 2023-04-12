import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!currentUser) {
      axios
        .get("/api/user", { withCredentials: true })
        .then(({ data }) => {
          console.log(data);
          setCurrentUser(data);
          setReady(true);
        })
        .catch((error) => setReady(true));
    }
  }, [currentUser]);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, ready }}>
      {children}
    </UserContext.Provider>
  );
};
