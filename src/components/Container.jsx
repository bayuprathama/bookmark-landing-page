import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
export default function Container({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      window.document.body.classList.add('overflow-hidden');
    }

    return () => window.document.body.classList.remove('overflow-hidden');
  }, [isOpen]);
  return (
    <div className="mx-auto">
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
      <Footer />
    </div>
  );
}
