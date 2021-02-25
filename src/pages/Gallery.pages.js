import React, { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className='w-full bg-white flex flex-grow overflow-scroll'>
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center my-4'>Gallery</h1>
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </section>
  );
};

export default Gallery;
