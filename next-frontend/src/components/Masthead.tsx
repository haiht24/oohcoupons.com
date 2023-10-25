"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import '@/assets/css/masthead.scss'
import { ButtonPrimary } from './Buttons'
import AllBrowser from '@/assets/images/browser-all.png'
import Chrome from '@/assets/images/oo/chrome.png'
import Edge from '@/assets/images/oo/microsoft.png'
import FireFox from '@/assets/images/oo/firefox.png'
import Safari from '@/assets/images/oo/safari.png'
import Sideup from '@/assets/images/oo/Top - Gif/ex-gif-done.gif'
import Sidedown from '@/assets/images/sidedown.png'

const Masthead = () => {
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
        <section id='masthead' className='masthead'>
            <div className='masthead-content'>
                <div className='masthead-content-left'>
                    <h1>
                        Work less,
                        <br />
                        save more
                    </h1>
                    <div className='simple_introduce mt-5 flex flex-col'>
                        <span>
                            oOhcoupons finds, tests and applies promo codes automatically for you at checkout, to ensure you score the best deal—every time.</span>
                        <span>
                            Save on all your purchases in just 1 click.
                        </span>
                    </div>
                    <div className="add_tochrome mt-10 flex items-center">
                        <ButtonPrimary text={false} link={`#`} cl={` block lg:mr-[15px] lg:w-[350px]`} />
                        {
                            browser === 'Google Chrome' && (
                                <Image src={Chrome} alt='chrome' height={36} width={36} className='inline-block' />
                            )}
                        {
                            browser === 'Microsoft Edge' && (
                                <Image src={Edge} alt='chrome' height={36} width={36} className='inline-block' />
                            )
                        }
                        {
                            browser === 'Mozilla Firefox' && (
                                <Image src={FireFox} alt='Mozilla Firefox' height={36} width={36} className='inline-block' />
                            )
                        }
                        {
                            browser === 'Safari' && (
                                <Image src={Safari} alt='Safari' height={36} width={36} className='inline-block' />
                            )
                        }
                    </div>
                    <div className="add_tips mt-5">
                        Add oOhcoupons and start saving today!
                    </div>
                </div>
                <div className='masthead-content-right'>
                    <Image src={Sidedown} className="sidedown" alt='sidedown' loading='lazy' />
                    <Image src={Sideup} className="sideup" alt='sideup' loading='lazy' />
                </div>
            </div>
        </section>
    )
}

export default Masthead