import React from 'react';
const logo = require('@app/assets/images/logo.png');

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="mt-8">
      <div className="grid grid-cols-3 px-12 gap-4">
        <div className="flex flex-1">
          <img
            src="/images/items/image1.png"
            alt=""
            className="flex-1 object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex self-center items-center">
            <img src={logo} alt="" className="h-16 object-cover" />
          </div>
          <div className="flex flex-1">
            <img
              src="/images/items/image2.png"
              alt=""
              className="flex-1 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-1">
          <img
            src="/images/items/image3.png"
            alt=""
            className="flex-1 object-cover"
          />
        </div>
      </div>
      <div className="bg-primary text-white text-center py-2">
        新規登録で１０％オフキャンペーン実施中！
      </div>
    </section>
  );
};
