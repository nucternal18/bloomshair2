import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/bloomshair-e4d4d.appspot.com/o/lauren-fleischmann-akfxOADwNhk-unsplash.jpg?alt=media&token=2bcfcfe6-51ad-4382-992c-9495f89d4a5e',
  'https://firebasestorage.googleapis.com/v0/b/bloomshair-e4d4d.appspot.com/o/AdobeStock_53052353.jpeg?alt=media&token=15a88f5f-9c23-488d-8246-2196f761e84b',
  'https://firebasestorage.googleapis.com/v0/b/bloomshair-e4d4d.appspot.com/o/AdobeStock_208497707.jpeg?alt=media&token=cefd00a3-3c68-4e78-b8a2-ce76be627a8c',
  'https://firebasestorage.googleapis.com/v0/b/bloomshair-e4d4d.appspot.com/o/AdobeStock_290145313.jpeg?alt=media&token=2baf489b-6c36-4767-b495-3b6d024f38b0',
];



const Slider = () => {
  const [image] = useState(images);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, image]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='bg-black section'>
      {image.map((image, personIndex) => {
        let position = 'nextSlide';
        if (personIndex === index) {
          position = 'activeSlide';
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === image.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (
          <article className={position} key={image}>
            <img src={image} alt='' className='person-img' />
          </article>
        );
      })}
      <button className='prev' onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Slider;
