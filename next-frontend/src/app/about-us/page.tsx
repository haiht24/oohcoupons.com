// import React from 'react'
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/assets/css/privacy.scss'
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
            <div className='page-about-us'>
                <h1 className='page-about-us-title' style={{paddingBottom:'1rem'}}>About OOHcoupons</h1>
                <section>
                    <div>Unlock Limitless Savings Opportunities</div>
                    <p>OOHcoupons is your go-to automatic coupon-hunting browser extension that seamlessly searches, analyzes, and applies the best coupon codes to your shopping cart. Say goodbye to the time-consuming and manual process of searching and testing codes – OOHcoupons does it all for you. Our dedicated team is constantly updating and enhancing OOHcoupons to empower users in making informed purchasing decisions. We scour the internet for valid coupon codes, so you don't have to.</p>
                    <div>Empowering Shoppers Globally</div>
                    <p>We collaborate with international and local retailers to make their exclusive deals and coupons easily accessible. Our mission is to empower online shoppers worldwide by providing countless opportunities to save across all product categories. With OOHcoupons, you'll never miss out on a good deal again.</p>
                    <p>Users worldwide are already enjoying significant savings and rewards with OOHcoupons. Discover how the OOHcoupons button can revolutionize your online shopping experience: OOHcoupons Browser Extension: Everything You Need to Know.</p>
                    <div>Find the Best Code with One Click</div>
                    <p>
                        <strong>Automatic Coupon Hunter:</strong> A single click of the OOHcoupons button reveals if a coupon code is available on the retailer's website.
                    </p>
                    <p>
                        <strong>Test Codes Instantly:</strong> OOHcoupons handles all the heavy lifting, eliminating the need for users to spend extensive time searching for working codes. Valid codes are automatically applied at checkout.
                    </p>
                    <p>
                        <strong>200,000+ Retail Partners:</strong> Shoppers will never miss out on a discount offer from their favorite stores. OOHcoupons is supported by many major department stores, popular brands, and leading e-commerce sites.
                    </p>
                    <p>
                        <strong>Apply the Best Code to Your Cart:</strong> OOHcoupons intelligently selects the coupon with the highest discount value if multiple codes are available.
                    </p>
                    <p>
                    Download OOHcoupons for free at the <a href="https://www.mozilla.org/en-US/firefox/browsers/">Firefox</a>, <a href="https://www.google.com/chrome/?brand=JJTC&gclid=CjwKCAjw-eKpBhAbEiwAqFL0mhwoEqnD6DXFLNmtIUvN_bdsK6vejKrV3d_k0DZC5AP_xiz-bXAlfBoCy34QAvD_BwE&gclsrc=aw.ds">Chrome</a>, and <a href="https://www.microsoft.com/en-us/edge/download?form=MA13FJ">Microsoft Edge</a> web stores.
                    </p>
                    <p>
                   <strong>Disclosure:</strong> We may earn a commission when you use one of our coupons/links to make a purchase. Your support allows us to continue providing you with exceptional savings opportunities.
                    </p>
                    
                </section>
            </div>
            <Footer />
        </>
    )
}

export default About