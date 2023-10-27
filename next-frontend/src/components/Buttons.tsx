"use client"

import React, { useEffect, useState } from 'react';

export const ButtonPrimary = ({ text, cl }: any) => {
  const [browser, setBrowser] = useState<string>(""); // Initialize browser state as a string

  const [installLink, setInstallLink] = useState<string>(process.env.CHROME_EXT || '') // default Chrome

  useEffect(() => {
    // Check for Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      setBrowser("Safari");
    } else if (navigator.userAgent.indexOf("Edg") > -1) {
      setBrowser("Microsoft Edge");
      setInstallLink(process.env.EDGE_EXT || '')
    } else if ((window as any).chrome) {
      setBrowser("Google Chrome");
    } else if ('InstallTrigger' in window) {
      setBrowser("Mozilla Firefox");
      setInstallLink(process.env.FIREFOX_EXT || '')
    } else if ('ActiveXObject' in window) {
      console.log("Internet Explorer or Microsoft Edge (legacy)");
      setInstallLink(process.env.EDGE_EXT || '')
    } else if ('StyleMedia' in window) {
      console.log("Microsoft Edge");
      setInstallLink(process.env.EDGE_EXT || '')
    } else {
      console.log("Unknown browser");
    }
  }, []);

  return (
    text === false ? <Button link={installLink} browser={browser} cl={cl} /> : <Button2 link={installLink} text={text} cl={cl} />
  );
}

export const Button = ({ link, browser, cl }: any) => {
  return (
    <a href={link} className={`btn-primary cursor-pointer bg-[#F08140] ${cl}`} target="_blank">{`Add to ${browser} - It's Free`}</a>
  );
}

export const Button2 = ({ link, text, cl }: any) => {
  return (
    <a href={link} className={`btn-primary cursor-pointer bg-[#F08140] ${cl}`} target="_blank">{text}</a>
  );
}
