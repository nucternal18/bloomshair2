// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

// Containers
import HomepageContainer from '../Container/HomeCard.container';

// Components
import Slider from '../components/Slider.js';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
  return (
    <section className='w-full flex flex-col'>
      <div className='homepage-card justify-center flex items-center text-3xl sm:text-6xl text-white font-bold text-center'>
        <motion.div
          className='opacity-75'
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 2.0 }}>
          <p>Welcome to Blooms Hair</p>
        </motion.div>
      </div>
      <Slider />
      <div className=''>
        <HomepageContainer />
      </div>
    </section>
  );
};

export default Home;
