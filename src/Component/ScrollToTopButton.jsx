import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './Icon';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check if the user has scrolled enough to show the button
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-3 right-3 rounded-full shadow-md"
          onClick={scrollToTop}
        >
          <ArrowUpIcon/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
