import React from 'react';
import FooterContainer from '../Container/footer.container';

const ServiceMenu = () => {
  return (
    <div className='flex-grow'>
      <div className='w-full bg-white'>
        <div className='srv-menu-card flex justify-center items-center font-bold text-white text-center text-2xl md:text-6xl'>
          <h1>Service & Price Menu</h1>
        </div>
        <div className='container mx-auto py-6 px-4'>
          <h1 className='text-3xl text-center sm:text-5xl mb-4'>
            Our Hair Services
          </h1>
          <div className='text-justify sm:text-center'>
            <p className='font-thin mb-2'>
              We’re a talented and passionate bunch here at Blooms hair, even if
              we do say so ourselves, creating styles that work with you and
              your lifestyle. We know hair, we know your hair, and we want to
              help you make the most of it.
            </p>
            <p className='font-thin mb-2'>
              Our team of experienced stylists ask questions, listen carefully
              to the answers, and provide recommendations tailored to your own
              individual needs. We work hard to keep ahead of the latest hair
              cuts and styles. After consultation with one of our team we then
              create that cut and style that will compliment and enhance your
              looks, so you leave our salon looking and feeling gorgeous every
              time.
            </p>
            <p className='font-thin mb-2'>
              Call today to book your appointment or for a free consultation.
            </p>
          </div>
          <div className='flex justify-center my-4 w-full'>
            <div className='grid grid-cols-3 border text-center w-full'>
              <div className='col-span-3 px-4 py-2 text-center font-bold bg-gray-300'>
                Gents Hair
              </div>
              <div className='col-span-2 px-4 py-2'>Gents Restyle & Finish</div>
              <div className='col-span-1 px-4 py-2'>£35.00</div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>
                Gents Wash, Cut & Finish
              </div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>£30.00</div>
              <div className='col-span-3 px-4 py-2 text-center font-bold bg-gray-300'>
                Ladies Hair
              </div>
              <div className='col-span-2 px-4 py-2'>Fringe Trim</div>
              <div className='col-span-1 px-4 py-2'>£6.00</div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>Hair Up</div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>P.O.T.</div>
              <div className='col-span-2 px-4 py-2'>Wash, Restyle & Finish</div>
              <div className='col-span-1 px-4 py-2'>£55.00</div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>
                Wash & Blow-Dry from
              </div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>
                £30.00 to £33.00
              </div>
              <div className='col-span-2 px-4 py-2'>Wash & Cut</div>
              <div className='col-span-1 px-4 py-2'>£39.00</div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>
                Wash, Cut & Finish
              </div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>£48.00</div>
              <div className='col-span-2 px-4 py-2'>
                Wedding Hair + Trial run (Bride)
              </div>
              <div className='col-span-1 px-4 py-2'>£195.00</div>
              <div className='col-span-3 px-4 py-2 text-center font-bold bg-gray-300'>
                Technical
              </div>
              <div className='col-span-2 px-4 py-2'>Bleaching</div>
              <div className='col-span-1 px-4 py-2'>P.O.T.</div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>
                Bleaching + Toner
              </div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>£79.00</div>
              <div className='col-span-2 px-4 py-2'>Colour Correction</div>
              <div className='col-span-1 px-4 py-2'>£110.00</div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>
                Dip-Dye/Ombre/Bayalage
              </div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>£110.00</div>
              <div className='col-span-2 px-4 py-2'>Full Head HiLites</div>
              <div className='col-span-1 px-4 py-2'>£110.00</div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>
                Full Head Tint
              </div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>£60.00</div>
              <div className='col-span-2 px-4 py-2'>Hair Mask Treatment</div>
              <div className='col-span-1 px-4 py-2'>£25.00</div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>
                Half Head HiLites
              </div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>£75.00</div>
              <div className='col-span-2 px-4 py-2'>Semi Permanent Colours</div>
              <div className='col-span-1 px-4 py-2'>£60.00</div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>
                Tint Regrowth (roots)
              </div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>£45.00</div>
              <div className='col-span-2 px-4 py-2'>Toner</div>
              <div className='col-span-1 px-4 py-2'>£15.00</div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>
                Toner (Half Head)
              </div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>£20.00</div>
              <div className='col-span-2 px-4 py-2'>Toner (Full Head)</div>
              <div className='col-span-1 px-4 py-2'>£25.00</div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>
                T-Section Highlights
              </div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>£55.00</div>
              <div className='col-span-3 px-4 py-2 text-center font-bold bg-gray-300'>
                Hair Treatments
              </div>
              <div className='col-span-2 px-4 py-2'>
                Brazilian Blow-Dry Long/Medium/Short
              </div>
              <div className='col-span-1 sm:px-4 py-2 break-words'>
                £200.00/£150.00/£120.00
              </div>
              <div className='col-span-2 bg-gray-100 px-4 py-2'>Olaplex™</div>
              <div className='col-span-1 bg-gray-100 px-4 py-2'>£30.00</div>
              <div className='col-span-2 px-4 py-2'>Perms and Waves</div>
              <div className='col-span-1 px-4 py-2'>P.O.T.</div>
            </div>
          </div>
          <h3 className='text-xl text-center my-4'>Terms and Conditions</h3>
          <div className='text-justify sm:text-center'>
            <p className='font-thin mb-2'>
              Should a cancellation or date change be necessary, we politely
              request 24 hour’s notice.
            </p>
            <p className='font-thin mb-2'>
              Please note all colour prices are ‘from’. Exact quotes can only be
              given after a consultation with a stylist. After colour services,
              a blow-dry with a stylist starts at £25 and needs to be specified
              when you book your appointment. All colour services will otherwise
              include a quick dry from an experienced assistant.
            </p>
            <p className='font-thin mb-2'>
              To avoid disappointment, punctuality for appointments is greatly
              appreciated.
            </p>
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default ServiceMenu;
