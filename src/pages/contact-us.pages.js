import React from 'react';
import { FiPhone, } from 'react-icons/fi'
import Maps from '../components/GoogleMaps';

const containerStyle = {
  height: '400px',
};

const ContactUs = () => {
  return (
    <div className='flex-grow w-full bg-white'>
      <div className='flex items-center justify-center px-2 text-2xl font-bold text-center text-white contact-menu-card md:text-6xl'>
        <h1>Contact Blooms Hair</h1>
      </div>
      <div className='container grid max-w-6xl grid-cols-1 mx-auto my-8 lg:grid-cols-2'>
        <div className='flex justify-center col-span-1 px-4 py-6 my-6 item-center'>
          <div className='flex-col text-justify'>
            <h1 className='mb-4 text-3xl sm:text-5xl'>Get In Touch</h1>
            <p>
              We pride ourselves being passionate on making you feel amazing
              about yourselves – Not just in the salon but in between visits.
              Blooms Hair will create a bespoke look; every person is
              individual, different and we would like to tailor make every look
              with a personal touch.
            </p>
          </div>
        </div>
        <div className='col-span-1 px-4 py-6 my-6'>
          <div className='grid grid-cols-2'>
            <div className='col-span-1 px-4 py-2 font-bold'>PHONE</div>
            <div className='col-span-1 px-4 py-2'>07838849597</div>
            <div className='col-span-1 px-4 py-2 font-bold'>EMAIL</div>
            <div className='col-span-1 px-4 py-2 break-words'>
              <a href='mailto:appointments@bloomshair.co.uk'>
                appointments@bloomshair.co.uk
              </a>
            </div>
            <div className='col-span-1 px-4 py-2 font-bold'>ADDRESS</div>
            <div className='col-span-1 px-4 py-2'>
              9 Lever St, London EC1V 3QU
            </div>
            <div className='col-span-1 px-4 py-2 font-bold'>FOLLOW</div>
            <div className='col-span-1 px-4 py-2'>
              <ul className='flex flex-row text-gray-600 '>
                <li className='px-2 hover:text-blue-500'>
                  <a href='https://www.facebook.com/pages/category/Pizza-Place/Viaromanonsolopizza-108686514250214/'>
                    <i className='text-2xl fab fa-facebook' />
                  </a>
                </li>
                <li className='px-2 hover:text-blue-500'>
                  <a href='https://www.instagram.com/viaromanonsolopizza/'>
                    <i className='text-2xl fab fa-instagram' />
                  </a>
                </li>
                <li className='px-2 hover:text-blue-500'>
                  <a href='https://www.google.com/maps/place/viaROMAnonsolopizza/@45.7240617,8.6311318,15z/data=!4m5!3m4!1s0x0:0x6dc73345553ebfda!8m2!3d45.7240617!4d8.6311318'>
                    <i className='text-2xl fab fa-google' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <Maps containerStyle={containerStyle} zoom={18} />
      </div>
    </div>
  );
};

export default ContactUs;
