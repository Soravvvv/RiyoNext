"use client";
import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center py-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.593676304145!2d78.00584607609892!3d30.305626974793128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b0dc5b66fdf%3A0xe66e55ad8e0609a8!2sWEBREATE!5e0!3m2!1sen!2sin!4v1714822755970!5m2!1sen!2sin"
        className="w-[95%] h-[45vh] rounded-lg"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
