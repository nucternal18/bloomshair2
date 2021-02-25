import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// context
import { AuthContext } from '../context/context';
import Maps from './GoogleMaps';

const containerStyle = {
  height: '200px',
};

const Footer = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <footer className=' w-full bg-gray-900 py-4 text-white bottom-0 left-0 mb-0'>
        <div className='container-lg mx-auto sm:mx-8 py-2 sm:py-6 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-4  gap-2 my-0'>
          <div className='w-full  mb-4 sm:mb-0'>
            <h2 className='text-xl font-bold mb-4'>ABOUT BLOOMS HAIR</h2>
            <p className='mb-4 text-gray-500 text-sm font-hairline'>
              At Blooms Hair, we are passionate about making you feel special,
              every day. That’s why we offer a wide selection of quality
              services in our salon in Islington London. We have Wella Colour
              Master experts on hand that can deliver full hair colours to
              balayage’s and highlights, achieving your perfect shade is simple.
            </p>
          </div>
          <div className='w-ful  px-2  mb-4 sm:mb-0'>
            <h1 className='text-xl font-bold mb-4'>OPENING HOURS</h1>
            <ul className='font-thin text-gray-500'>
              <li className='flex mb-4 justify-between'>
                Monday: <strong className='ml-6'>Closed</strong>
              </li>
              <li className='flex flex-row mb-4 justify-between'>
                Tuesday:
                <strong>11.00am - 20.00pm</strong>
              </li>
              <li className='flex mb-4 justify-between text-base'>
                Wednesday:
                <p className=''>
                  <strong>11.00am - 20.00pm</strong>
                </p>
              </li>
              <li className='flex flex-row mb-4 justify-between'>
                Thursday:
                <p>
                  <strong>11.00am - 20.00pm</strong>
                </p>
              </li>
              <li className='flex flex-row mb-4 justify-between'>
                Friday:
                <p>
                  <strong>11.00am - 20.00pm</strong>
                </p>
              </li>
              <li className='flex flex-row mb-4 justify-between'>
                Saturday:
                <p>
                  <strong>Closed</strong>
                </p>
              </li>
              <li className='flex flex-row mb-4 justify-between'>
                Sunday:
                <p>
                  <strong>Closed</strong>
                </p>
              </li>
            </ul>
          </div>
          <div className='w-full mb-4 sm:mb-0'>
            <h1 className='text-xl font-bold mb-4'>CONTACT BLOOMS HAIR</h1>
            <p className='mb-4 font-thin text-gray-500'>
              T: <a href='tel:07838849597'>07838849597</a>
            </p>
            <p className='mb-4 font-thin text-gray-500'>
              E:{' '}
              <a href='mailto:appointments@bloomshair.co.uk'>
                appointments@bloomshair.co.uk
              </a>
            </p>
            <p className='mb-4 font-thin text-gray-500'>
              A: 9 Lever Street, London EC1V 3QU
            </p>
            <div className='w-full'>
              <Maps containerStyle={containerStyle} zoom={17} />
            </div>
          </div>
          <div className='w-full mb-4 sm:mb-0'>
            <h1 className='text-xl font-bold mb-4'>
              FOLLOW US ON SOCIAL MEDIA
            </h1>
            <div className='z-50 mb-6'>
              <ul className='flex flex-row text-white '>
                <li className='px-1 py-2 m-1 hover:text-blue-500'>
                  <a href='https://www.facebook.com/pages/category/Pizza-Place/Viaromanonsolopizza-108686514250214/'>
                    <i className='fab fa-facebook text-2xl' />
                  </a>
                </li>
                <li className='px-1 py-2 m-1 hover:text-blue-500'>
                  <a href='https://www.instagram.com/viaromanonsolopizza/'>
                    <i className='fab fa-instagram text-2xl' />
                  </a>
                </li>
                <li className='px-1 py-2 m-1 hover:text-blue-500'>
                  <a href='https://www.google.com/maps/place/viaROMAnonsolopizza/@45.7240617,8.6311318,15z/data=!4m5!3m4!1s0x0:0x6dc73345553ebfda!8m2!3d45.7240617!4d8.6311318'>
                    <i className='fab fa-google text-2xl' />
                  </a>
                </li>
              </ul>
            </div>
            <div className='mb-4'>
              <h2 className='text-base sm:text-xl mb-4'>Links</h2>

              <ul className='text-gray-500 font-thin flex flex-row'>
                {isAuthenticated ? (
                  <li className='mb-3'>
                    <Link to='/admin'>admin</Link>
                  </li>
                ) : (
                  <li className='mx-4 hover:text-blue-400 '>
                    <Link to='/login'>
                      <i className='far fa-user' />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row py-4 justify-center'>
          <div>
            <p className='text-center text-gray-500 text-xs'>
              &copy;2020 Blooms Hair. All rights reserved. |
            </p>
          </div>
          <div>
            <p className='text-center text-gray-500 text-xs sm:ml-2'>
              maintained by aolausoro.tech
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
