import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { motion } from 'framer-motion';
import ErrorMessage from '../components/ErrorMessage';

// context
import { useAuth } from '../context/context';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isError, clearErrors, login, isAuthenticated } = useAuth();

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
    return <Redirect to="/admin" />;
  }

  return (
    <section className='flex-grow w-full py-8 bg-gray-200'>
      <div className='container mx-auto'>
        <h1 className='my-8 text-3xl text-center'>
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
            className='px-8 pt-6 pb-8 mx-2 mb-4 bg-white rounded shadow-xl sm:mx-auto sm:w-3/4'>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block mb-2 text-base font-bold text-gray-700'>
                Email Address
              </label>
              <input
                className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow-md appearance-none focus:outline-none '
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-8'>
              <label
                className='block mb-2 text-base font-bold text-gray-700'
                htmlFor='password'>
                Password
              </label>
              <input
                className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow-md appearance-none focus:outline-none '
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <ErrorMessage errorMessage={error} />}
            <div className='flex items-center justify-between'>
              <button
                className='w-2/5 px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
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
