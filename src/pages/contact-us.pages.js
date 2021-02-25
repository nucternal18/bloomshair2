import React from 'react';
import Maps from '../components/GoogleMaps';

const containerStyle = {
  height: '400px',
};

const ContactUs = () => {
  return (
    <div className='w-full bg-white flex-grow'>
      <div className='contact-menu-card flex justify-center items-center text-center px-2 font-bold text-white text-2xl md:text-6xl'>
        <h1>Contact Blooms Hair</h1>
      </div>
      <div className='container my-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2'>
        <div className='col-span-1 flex justify-center item-center my-6 px-4 py-6'>
          <div className='flex-col text-justify'>
            <h1 className='text-3xl sm:text-5xl mb-4'>Get In Touch</h1>
            <p>
              We pride ourselves being passionate on making you feel amazing
              about yourselves – Not just in the salon but in between visits.
              Blooms Hair will create a bespoke look; every person is
              individual, different and we would like to tailor make every look
              with a personal touch.
            </p>
          </div>
        </div>
        <div className='col-span-1 my-6 px-4 py-6'>
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
                    <i className='fab fa-facebook text-2xl' />
                  </a>
                </li>
                <li className='px-2 hover:text-blue-500'>
                  <a href='https://www.instagram.com/viaromanonsolopizza/'>
                    <i className='fab fa-instagram text-2xl' />
                  </a>
                </li>
                <li className='px-2 hover:text-blue-500'>
                  <a href='https://www.google.com/maps/place/viaROMAnonsolopizza/@45.7240617,8.6311318,15z/data=!4m5!3m4!1s0x0:0x6dc73345553ebfda!8m2!3d45.7240617!4d8.6311318'>
                    <i className='fab fa-google text-2xl' />
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
