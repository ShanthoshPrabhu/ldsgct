import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full py-4 mt-32 text-white bg-indigo-900">
      <div className="">
        <div className="flex flex-row justify-center gap-2">
          <img src="https://www.linkpicture.com/q/lds-logo-1.png" alt="Logo" className='w-8 h-8' />
          <p className='mt-0.5'>Presented by Literary and Debating Society</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
