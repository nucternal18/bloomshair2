// @ts-nocheck
import React, { useState } from 'react';
import axios from 'axios';

const InputForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const newMessage = {
      name,
      email,
      subject,
      message,
    };

    await axios.post('/contactform', newMessage);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <form onSubmit={sendMessage} className='w-full max-w-sm py-6 px-4'>
      <div className='w-full'>
        <h2 className='text-center text-4xl '>Send us a Message</h2>
        <div className='w-full px-3 mb-6 md:mb-0'>
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            placeholder='Name'
          />
        </div>
        <div className='w-full px-3 mb-6 md:mb-0'>
          <input
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            placeholder='Email'
          />
        </div>
        <div className='w-full px-3 mb-6 md:mb-0'>
          <input
            type='text'
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            placeholder='Subject'
          />
        </div>
        <div className='w-full px-3 mb-6 md:mb-0'>
          <textarea
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
          />
        </div>
        <div className='w-full px-3 mb-6 md:mb-0'>
          <button className='shadow bg-purple-500 hover:bg-purple-300 w-full focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
