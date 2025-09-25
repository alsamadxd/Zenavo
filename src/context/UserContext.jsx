
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [username, setUser] = useState(() => {
    // Get from localStorage on first render
    return localStorage.getItem('username') || null;
  });

  // Store username in localStorage whenever it changes
  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username'); // clear on logout
    }
  }, [username]);

  return (
    <UserContext.Provider value={{ username, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
