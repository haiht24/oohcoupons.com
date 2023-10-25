"use client"
import React, { useEffect, useState } from 'react';
export const ButtonPrimary = ({ link,text, cl }: any) => {
  const [browser, setBrowser] = useState<string>(""); // Initialize browser state as a string

  useEffect(() => {
    // Check for Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      setBrowser("Safari");
    } else if (navigator.userAgent.indexOf("Edg") > -1) {
      setBrowser("Microsoft Edge");
    } else if ((window as any).chrome) {
      setBrowser("Google Chrome");
    } else if ('InstallTrigger' in window) {
      setBrowser("Mozilla Firefox");
    } else if ('ActiveXObject' in window) {
      console.log("Internet Explorer or Microsoft Edge (legacy)");
    } else if ('StyleMedia' in window) {
      console.log("Microsoft Edge");
    } else {
      console.log("Unknown browser");
    }
  }, []);

  return (
    text === false ? <Button link={link} browser={browser} cl={cl} /> :<Button2 link="#" text={text} cl={cl} />
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
