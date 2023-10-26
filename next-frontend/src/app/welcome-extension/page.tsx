"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/assets/css/welcome.scss'
import popup from '@/assets/images/wc4.png';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';


const WelcomeExt = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Nav />
      <div className="page-wellcome-ext">
        <div className={`float-box ${isVisible ? 'visible' : ''}`}>
          <a href="/">Back to Home</a>
          <Image src={popup} alt="demo" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WelcomeExt