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
    <section className='flex flex-col w-full'>
      <div className='flex items-center justify-center text-4xl font-bold text-center text-white homepage-card sm:text-6xl'>
        <motion.div
          className='opacity-75'
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 2.0 }}>
          <p>Welcome to Blooms Hair</p>
        </motion.div>
      </div>
      <div className=''>
        <HomepageContainer />
      </div>
    </section>
  );
};

export default Home;
