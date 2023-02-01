import FacebookIcon from '@app/components/icons/Facebook';
import InstagramIcon from '@app/components/icons/Instagram';
import { data } from '@app/data/data';
const logo = require('@app/assets/images/logo.png');

export function Header() {
  return (
    <header id="nav">
      <nav className="flex items-center justify-between px-6 py-8">
        <div className="flex items-center">
          <a className="h-8" href="/">
            <img src={logo} alt="logo" className="h-full" />
          </a>
          <div className="break-keep text-sm ml-4 text-gray-500">
            We sell only sweaters
          </div>
        </div>
        <div className="flex items-center text-gray-500">
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
          <div className="flex ml-16 gap-4 text-gray-500">
            <a href={data.social.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href={data.social.facebook} target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
