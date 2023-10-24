"use client"
import React, { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import Masthead from '@/components/Masthead';
import Slider from '@/components/Slider';
import MerchantList from '@/components/MerchantList';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import CommonList from '@/components/CommonList';
import Footer from '@/components/Footer';

export default function Home() {
  const name = 'Moolah';
  const [browser, setBrowser] = useState<string>(""); // Initialize browser state as a string

  useEffect(() => {
    // Check for Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      setBrowser("Safari");
      // console.log('Safari');
    } else if (navigator.userAgent.indexOf("Edg") > -1) {
      setBrowser("Microsoft Edge");
      // console.log('Microsoft Edge');
    } else if ((window as any).chrome) {
      setBrowser("Google Chrome");
      // console.log('Google Chrome');
    } else if ('InstallTrigger' in window) { // Check for InstallTrigger
      setBrowser("Mozilla Firefox");
      // console.log('Mozilla Firefox');
    } else if ('ActiveXObject' in window) {
      console.log("Internet Explorer or Microsoft Edge (legacy)");
    } else if ('StyleMedia' in window) {
      console.log("Microsoft Edge");
    } else {
      console.log("Unknown browser");
    }
  }, []);

  return (
    <main>
      <Nav nameExt={name} ext={browser} />
      <Masthead ext={browser} />
      <Slider />
      <MerchantList ext={browser} />
      <Section1 />
      <Section2 />
      <Section3 ext={browser} />
      <CommonList />
      <Footer ext={browser} />
    </main>
  );
}
