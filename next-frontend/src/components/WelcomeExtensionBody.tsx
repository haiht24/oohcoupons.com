"use client"

import popup from '@/assets/images/welcome.png'
import rope from '@/assets/images/rope.svg'
import whiteStar from '@/assets/images/white-star.svg'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const WelcomeExtensionBody = () => {
    
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="page-wellcome-ext">
            <div className={`float-box ${isVisible ? 'visible' : ''} flex items-center justify-center flex-col-reverse lg:flex-row`}>
                <div className='flex items-center justify-center flex-col'>
                    <h2 className="fb-title active text-white">Welcome</h2>
                    <div className='try-demo-box'>
                        <a href="#" className='text-white flex items-center justify-center'>
                            <Image src={whiteStar} alt='white-star' priority className='white-star' />
                            Try Demo</a>
                    </div>
                    <a href="/" className='block my-4'>Back to Home</a>
                    <div className="text-white">It takes 15 seconds only</div>
                </div>
                <Image src={rope} alt='rope' className='rope' />
                <Image src={popup} alt="popup" className='popup' />
            </div>
        </div>
    )
}

export default WelcomeExtensionBody