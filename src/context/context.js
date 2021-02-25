import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';

// Google auth
import { auth } from '../firebase/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get('auth-token'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState({});


  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUserData(null);
        setIsAuthenticated(false);
        Cookies.set('auth-token', '', { });
        return;
      }

      const authToken = await user.getIdToken();
      setUserData(user);
      setIsAuthenticated(true);
      Cookies.set('auth-token', authToken, { expires: 7 });
    });
  }, []);

  // Login
  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
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

export const useAuth = () => useContext(AuthContext);