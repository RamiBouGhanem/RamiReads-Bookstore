import React from 'react';
import { ClockIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';

function Contact() {
  return (
    <div className="contact-container p-6 shadow-md w-full bg-gradient-to-t from-black via-gray-800 to-gray-900 px-6 sm:px-14">
      <div className="contact-info flex flex-col lg:flex-row justify-between pt-12 pb-24 pr-16 pl-8 text-center">
        <div className="hours mb-8 lg:mb-0">
          <ClockIcon className="h-12 w-12 text-blue-500 mx-auto mb-6" />
          <h3 className="text-3xl lg:text-5xl font-semibold text-white mb-4">Hours</h3>
          <p className="text-gray-200 text-xl lg:text-2xl">Tues-Fri: <span className="font-medium text-blue-500">9:00am - 6:00pm</span></p>
          <p className="text-gray-200 text-xl lg:text-2xl">Sat: <span className="font-medium text-blue-500">9:00am - 3:00pm</span></p>
          <p className="text-gray-200 text-xl lg:text-2xl">Closed: <span className="font-medium text-blue-500">Sun & Mon</span></p>
        </div>
        <div className="contact-details mb-8 lg:mb-0 pr-12">
          <PhoneIcon className="h-12 w-12 text-blue-500 mx-auto mb-6" />
          <h3 className="text-3xl lg:text-5xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="flex items-center text-gray-200 text-xl lg:text-2xl p-1">
            <a href="tel:+96170439225" className="text-blue-500 hover:underline mx-auto">+961 70 439 225</a>
          </p>
          <p className="flex items-center text-gray-200 text-xl lg:text-2xl p-1">
            <a href="mailto:rami.boughanem240@gmail.com" className="text-blue-500 hover:underline mx-auto">ramireads@gmail.com</a>
          </p>
        </div>
        <div className="location">
          <MapPinIcon className="h-12 w-12 text-blue-500 mx-auto mb-6" />
          <h3 className="text-3xl lg:text-5xl font-semibold text-white mb-4">Location</h3>
          <p className="text-blue-500 hover:underline text-xl lg:text-2xl">Lebanon, Beirut</p>
          <p className="text-blue-500 hover:underline text-xl lg:text-2xl">Hamra Street</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
