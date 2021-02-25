import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Google auth
import { auth } from '../firebase/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState({});

  const authCookie = (e) => {
    const authToken = Cookies.get('auth-token');
    if (authToken) {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    authCookie();
    // eslint-disable-next-line
  }, []);

  // Login
  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      Cookies.set('auth-token', 'vrnsp-auth-success', { expires: 7 });
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      console.error(error.message);
    }
  };

  // Logout
  const logout = (cb) => {
    auth.signOut();
    Cookies.remove('auth-token');
    setIsAuthenticated(false);
    setLoading(false);
    setToken(null);
    setTimeout(cb, 100)
  };
  // Clear Errors
  const clearErrors = () => setIsError(null);

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        loading,
        isError,
        user: userData,
        login,
        setIsAuthenticated,
        setUserData,
        setIsError,
        logout,
        clearErrors,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
