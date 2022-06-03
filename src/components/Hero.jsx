import React from 'react';
import heroIllustration from '../images/illustration-hero.svg';

export default function Hero() {
  return (
    <div className="relative w-full mt-20 mb-32 grid md:grid-cols-2 md:max-w-[1120px] md:mx-auto">
      <div className="text-center px-[30px] md:pt-14 md:px-0 md:text-left max-w-[485px] mx-auto md:mx-0 md:justify-self-start">
        <h1 className="mb-4 text-3xl font-medium text-gray-800 md:text-5xl">
          A Simple Bookmark Manager
        </h1>
        <p className="text-gray-400 md:text-lg">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex max-w-[320px] mx-auto md:mx-0 justify-between gap-1 mt-8 md:gap-4 md:justify-start">
          <button className="px-[18px] shadow-lg py-3 text-sm font-medium text-white rounded-md bg-soft-blue">
            Get it on Chrome
          </button>
          <button className="px-[18px] shadow-lg py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-md">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="md:w-[630px] row-start-1  md:row-start-auto">
        <img className="w-full" src={heroIllustration} alt="" />
      </div>
    </div>
  );
}
