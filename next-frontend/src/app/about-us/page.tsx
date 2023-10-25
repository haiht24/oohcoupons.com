// import React from 'react'
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Metadata } from 'next'

/* Metadata */
export const metadata: Metadata = {
    alternates: {
        canonical: '/about-us',
    },
    title: `About Us`,
    description: '',
}

const About = () => {
    return (
        <>
            <Nav />
            <div>About Us</div>
            <Footer />
        </>
    )
}

export default About