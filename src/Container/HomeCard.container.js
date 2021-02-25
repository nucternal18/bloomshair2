import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FooterContainer from './footer.container';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HomepageContainer = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 '>
        <div className='py-4 px-8 bg-black flex flex-col justify-center items-center text-center'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}
            transition={{ duration: 2.0 }}>
            <p className='font-thin mb-4 text-white text-3xl'>
              WE REOPEN ON DECEMBER 2ND
            </p>
            <p className='font-thin mb-4 text-white text-3xl'>
              KEEPING YOU & OUR TEAM SAFE
            </p>
            <Link to='/book-online'>
              <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
                Book Now!
              </button>
            </Link>
          </motion.div>
        </div>
        <div
          className='w-full justify-center flex flex-col items-center '
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/bloomshair-e4d4d.appspot.com/o/george-bohunicky-qJKT2rMU0VU-unsplash.jpg?alt=media&token=3ceb1c1f-3f91-434e-9cb8-b666310506d9)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '450px',
          }}>
          <p className='text-center text-white text-4xl font-bold'>
            About Blooms
          </p>
          <div>
            <Link to='/about-us'>
              <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <FooterContainer />
    </>
  );
};

export default HomepageContainer;
