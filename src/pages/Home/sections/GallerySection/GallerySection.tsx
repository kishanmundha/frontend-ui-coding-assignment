import React from 'react';
const logo = require('@app/assets/images/logo.png');

export interface GallerySectionProps {}

export const GallerySection: React.FC<GallerySectionProps> = () => {
  return (
    <div id="gallery" className="flex justify-center relative mt-52">
      <img
        src="/images/gallary.png"
        alt=""
        className="w-full h-80 opacity-40"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <img src={logo} alt="" className="opacity-50 h-20" />
      </div>
    </div>
  );
};
