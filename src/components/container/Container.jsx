import React from 'react';

function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 py-[0px] sm:py-[30px] md:py-[60px] sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
