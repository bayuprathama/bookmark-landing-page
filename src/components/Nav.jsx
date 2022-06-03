import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import IconHamburger from './media/IconHamburger';
import IconLogo from './media/IconLogo';
import IconMenuClose from './media/IconMenuClose';

export default function Nav({ isOpen, setIsOpen }) {
  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };
  // mobile menu styling
  const mobileMenuStyle = {
    header: {
      open: 'bg-[rgba(36,42,69,0.9)] w-screen h-screen text-white relative flex  justify-between  ',
      close: 'items-center flex justify-between mx-auto',
    },
    ul: {
      open: 'absolute flex items-center text-center flex-col bottom-0 right-0 left-0 top-[100px] px-7 text-lg tracking-widest',
      close: 'hidden md:flex md:items-center gap-6',
    },
    li: {
      open: 'w-full border-t border-gray-500',
      close: '',
    },
    button: {
      open: <IconHamburger />,
      close: <IconMenuClose />,
    },
  };

  return (
    <header
      className={` ${clsx(
        isOpen ? [mobileMenuStyle.header.open] : [mobileMenuStyle.header.close]
      )} py-5 px-7 md:px-0 max-w-[1120px]`}
    >
      <div>
        <span>
          <IconLogo isOpen={isOpen} />
        </span>
      </div>
      <ul
        className={`${clsx(
          isOpen
            ? [mobileMenuStyle.ul.open, 'translate-x-0']
            : [mobileMenuStyle.ul.close, '-translate-x-full md:translate-x-0']
        )} text-sm`}
      >
        <li
          className={`${clsx(
            isOpen ? mobileMenuStyle.li.open : mobileMenuStyle.li.close
          )}`}
        >
          <a
            href="#features"
            className="inline-block py-5 tracking-widest uppercase"
          >
            Features
          </a>
        </li>
        <li
          className={`${clsx(
            isOpen ? mobileMenuStyle.li.open : mobileMenuStyle.li.close
          )}`}
        >
          <a
            href="#pricing"
            className="inline-block py-5 tracking-widest uppercase"
          >
            Pricing
          </a>
        </li>
        <li
          className={`${clsx(
            isOpen
              ? [mobileMenuStyle.li.open, 'mb-6 border-y']
              : mobileMenuStyle.li.close
          )}`}
        >
          <a
            href="#contact"
            className="inline-block py-5 tracking-widest uppercase"
          >
            Contact
          </a>
        </li>
        <li className="w-full">
          <a
            href="#login"
            className="inline-block w-full py-2 tracking-widest uppercase border border-gray-100 rounded md:bg-soft-red md:text-white md:px-8 active:bg-white active:text-soft-red active:border active:border-soft-red"
          >
            Login
          </a>
        </li>
        <div className="flex md:hidden gap-[40px] absolute left-0 right-0 bottom-[55px] justify-center">
          <a href="#facebook">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                />
              </svg>
            </span>
          </a>
          <a href="#twitter">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
                />
              </svg>
            </span>
          </a>
        </div>
      </ul>
      <div className="md:hidden">
        <button onClick={handleMenuClick}>
          {isOpen ? mobileMenuStyle.button.close : mobileMenuStyle.button.open}
        </button>
      </div>
    </header>
  );
}
