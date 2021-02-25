import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import UploadForm from '../components/UploadForm';

// context
import { AuthContext } from '../context/context';

// firebase
import { auth, createUserProfileDocument } from '../firebase/config';

const Admin = withRouter(({history}) => {
  const authContext = useContext(AuthContext);

  const { setUserData, user, logout } = authContext;

  console.log(user);
  
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);

        useRef.onSnapshot((snapShot) => {
          setUserData({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setUserData(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className='w-full bg-white flex-grow'>
      <div className='container mx-auto my-6 mx-8'>
        <div>
          {user && (
            <button
              onClick={() => logout(() => history.push('/'))}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              <i className='fas fa-sign-out-alt'></i>
              LOGOUT
            </button>
          )}
        </div>
        <h1 className='text-center text-5xl font-light mb-4'>Pictures</h1>
        <p className='text-center mb-2'>Load your latest Pictures</p>
        <UploadForm />
      </div>
    </div>
  );
});

export default Admin;
