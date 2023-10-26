import Image from 'next/image';
import { ButtonPrimary } from './Buttons';
import '@/assets/css/merchantlist.scss';

// Import your images statically with specified width and height
import image1 from '@/assets/images/oo/stores/macys.png';
import image2 from '@/assets/images/oo/stores/walmartLogo.png';
import image3 from '@/assets/images/oo/stores/nike-logo.jpeg';
import image4 from '@/assets/images/oo/stores/amazon.png';
import image5 from '@/assets/images/oo/stores/Kohls.png';
import image6 from '@/assets/images/oo/stores/Booking.png';
import image7 from '@/assets/images/oo/stores/AliExpress-Logo.png';
import image8 from '@/assets/images/oo/stores/Forever_21_logo.svg.png';
import image9 from '@/assets/images/oo/stores/Udemy_logo.svg.png';
import image10 from '@/assets/images/oo/stores/ebay.png';
import image11 from '@/assets/images/oo/stores/1485908_WAG_Signature_logo_RGB_750x208.png';
import image12 from '@/assets/images/oo/stores/ULTA_Logo.jpeg';

const images = [
    {
        src: image1,
        alt: "Macys",
    },
    {
        src: image2,
        alt: "Walmart",
    },
    {
        src: image3,
        alt: "Nike",
    },
    {
        src: image4,
        alt: "Amazon",
    },
    {
        src: image5,
        alt: "Kohls",
    },
    {
        src: image6,
        alt: "Booking",
    },
    {
        src: image7,
        alt: "AliExpress",
    },
    {
        src: image8,
        alt: "Forever_21",
    },
    {
        src: image9,
        alt: "Udemy",
    },
    {
        src: image10,
        alt: "Ebay",
    },
    {
        src: image11,
        alt: "Walgreens",
    },
    {
        src: image12,
        alt: "Ulta",
    },
];

export const MerchantItem = ({ src, alt }: any) => {
    return (
        <div className='inline-block'>
            <a href="" target="_blank">
                <Image src={src} alt={alt} loading='lazy' width={90} height={90} />
            </a>
        </div>
    );
}

const MerchantList = ({ nameExt }: any) => {
    return (
        <>
            <section className='merchant_list'>
                <h2>200,000+ Stores</h2>
                <h3>The oOhcoupons extension automatically searches for coupons on 200,000+ sites around the globe.</h3>
                <div className='merchant_item grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-6'>
                    {images.map((image, i) => (
                        <MerchantItem key={i} src={image.src} alt={image.alt} />
                    ))}
                </div>
            </section>
            <section className='features_list'>
                <h1>Why spend more?</h1>
                <h2>Try {nameExt} for automatic coupon codes at checkout.</h2>
                <ButtonPrimary link={`#`} text={false} cl={`mt-[30px] mb-[60px] block w-full lg:w-[300px] lg:mb-[100px] mx-auto`} />
            </section>
        </>
    );
}

export default MerchantList;
