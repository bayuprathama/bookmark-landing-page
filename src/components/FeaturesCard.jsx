import React from 'react';
import dashed from '../images/bg-dots.svg';

export default function FeaturesCard({
  title,
  minimumVersion,
  icon,
  top,
  className,
}) {
  return (
    <div
      className={`shadow-lg rounded-xl md:w-[280px] md:mt-[${top}] ${className}`}
    >
      {/* top */}
      <div
        style={{ backgroundImage: `url(${dashed})` }}
        className="flex flex-col items-center justify-center bg-bottom bg-no-repeat"
      >
        <span className="mb-[25px] mt-[40px]">{icon}</span>
        <div className="text-center mb-[40px]">
          <p className="font-medium text-gray-800">{title}</p>
          <p className="text-sm text-gray-500">{minimumVersion}</p>
        </div>
      </div>
      {/* bottom */}
      <div className="flex items-center justify-center py-7">
        <button className="text-white bg-soft-blue py-[13px] px-8 font-medium rounded-lg text-sm">
          Add & Install Extension
        </button>
      </div>
    </div>
  );
}
