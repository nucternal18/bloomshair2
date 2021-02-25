import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { motion } from 'framer-motion';
import ErrorMessage from '../components/ErrorMessage';

// context
import { AuthContext } from '../context/context';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isError, clearErrors, login, isAuthenticated } = useContext(
    AuthContext
  );
  const { from } = props.location.state || { from: { pathname: '/admin' } };

  useEffect(() => {
    if (isError) {
      setError('The username or password provided were incorrect!');
      clearErrors();
    }
  }, [clearErrors, isError]);

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
    setEmail('');
    setPassword('');
  };

  if (isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <section className='w-full flex-grow  bg-gray-200  py-8'>
      <div className='container mx-auto'>
        <h1 className='my-8 text-center text-3xl'>
          Account <span className='text-blue-700'>Login</span>
        </h1>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 2.0 }}
        >
          <form
            onSubmit={onSubmit}
            className='bg-white mx-2 sm:mx-auto sm:w-3/4 shadow-xl rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 text-base font-bold mb-2'>
                Email Address
              </label>
              <input
                className='shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none '
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-8'>
              <label
                className='block text-gray-700 text-base font-bold mb-2'
                htmlFor='password'>
                Password
              </label>
              <input
                className='shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none '
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <ErrorMessage errorMessage={error} />}
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 w-2/5 mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'>
                Login
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
