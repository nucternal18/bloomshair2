// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import Spinner from '../components/spinner.component';

const BookOnline = () => {
  const [loading, setLoading] = useState(false);
  const scriptEl = useRef(null);

  useEffect(() => {
    setLoading(true);
    // Append a script tag to the end of the div
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.language = 'javascript';
    script.src =
      'https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqnC3SqD3OcT3qmV35y6RuSdBuOc1WJD1wOc1WO61Ctdg4tjxMG9pUxapkUcPCu7gevEhAJDXwPW?v=yLVszzzF4Fyeyx4s0YJfhPLt37IcESD3rlFYhU1o30ci#';
    script.async = true;

    scriptEl.current.appendChild(script);
    setLoading(false);
  }, []);

  return (
    <div className='bg-white flex-grow w-full h-auto'>
      {loading ? (
        <Spinner />
      ) : (
        <div ref={scriptEl} className='vagaro'>
          <a href='https://sales.vagaro.com/'>Powered by Vagaro</a>&nbsp;
          <a href='https://sales.vagaro.com/salon-software'>Salon Software</a>
          ,&nbsp;
          <a href='https://sales.vagaro.com/spa-software'>Spa Software</a>
          &nbsp;&amp;&nbsp;
          <a href='https://sales.vagaro.com/fitness-software'>
            Fitness Software
          </a>
        </div>
      )}
    </div>
  );
};

export default BookOnline;
