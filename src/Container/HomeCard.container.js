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
        <div className='flex flex-col items-center justify-center px-8 py-4 text-center bg-black'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}
            transition={{ duration: 2.0 }}>
            <p className='mb-4 text-3xl font-thin text-white'>
              WE REOPEN ON THE 12TH APRIL
            </p>
            <p className='mb-4 text-3xl font-thin text-white'>
              KEEPING YOU & OUR TEAM SAFE
            </p>
            <Link to='/book-online'>
              <button className='px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent'>
                Book Now!
              </button>
            </Link>
          </motion.div>
        </div>
        <div
          className='flex flex-col items-center justify-center w-full '
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/bloomshair-e4d4d.appspot.com/o/george-bohunicky-qJKT2rMU0VU-unsplash.jpg?alt=media&token=3ceb1c1f-3f91-434e-9cb8-b666310506d9)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '450px',
          }}>
          <p className='text-4xl font-bold text-center text-white'>
            About Blooms
          </p>
          <div>
            <Link to='/about-us'>
              <button className='px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent'>
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
