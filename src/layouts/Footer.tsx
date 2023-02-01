import React from 'react';
import FacebookIcon from '@app/components/icons/Facebook';
import InstagramIcon from '@app/components/icons/Instagram';
import { data } from '@app/data/data';
const logo = require('@app/assets/images/logo.png');

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="container-md flex flex-col mt-16">
      <div className="flex items-center justify-between py-8 text-gray-500">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-12" />
          <div className=" break-keep flex mt-2 text-sm ml-4">
            We sell only sweaters
          </div>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li>
              <a href="#about" className="hover:underline p-4">
                About
              </a>
            </li>
            <li>
              <a href="#items" className="hover:underline p-4">
                Item
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline p-4">
                Shop
              </a>
            </li>
            <li>
              <a href="#info" className="hover:underline p-4">
                Info
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline p-4">
                Press
              </a>
            </li>
          </ul>
          <div className="flex ml-16 gap-4">
            <a href={data.social.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href={data.social.facebook} target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <div className=" text-gray-500 mt-16">
        <div>
          Tel:&nbsp;
          <a href={`tel:${data.tel}`} className="hover:underline">
            {data.tel}
          </a>
        </div>
        <div>
          Email: &nbsp;
          <a href={`mailto:${data.email}`} className="hover:underline">
            {data.email}
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-6 border-t pt-4 text-gray-500">
        <span className="text-sm">2022@only sweater</span>
      </div>
    </footer>
  );
};
