import React, { useState } from 'react';
import { getUserFromLocalCookie } from './auth';
import Cookies from 'js-cookie';

const User = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const value = { user, setUser, loading, setLoading };

  return <User.Provider value={value}>{children}</User.Provider>;
};

export const useUser = () => React.useContext(User);
