import Image from 'next/image'
// import Temu from '@/assets/images/temu.png'
import '@/assets/css/slider.scss'
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
import image13 from '@/assets/images/oo/stores/100pure.webp';
import image14 from '@/assets/images/oo/stores/11 Honore .png';
import image15 from '@/assets/images/oo/stores/1-up-nutrition.png';
import image16 from '@/assets/images/oo/stores/2Modern.webp';
import image17 from '@/assets/images/oo/stores/2xist.avif';
import image18 from '@/assets/images/oo/stores/34_Heritage.webp';
import image19 from '@/assets/images/oo/stores/360cashmere.png';
// import image15 from '@/assets/images/oo/stores/1-up-nutrition.png';
// import image15 from '@/assets/images/oo/stores/1-up-nutrition.png';
// import image15 from '@/assets/images/oo/stores/1-up-nutrition.png';
// import image15 from '@/assets/images/oo/stores/1-up-nutrition.png';
// import image15 from '@/assets/images/oo/stores/1-up-nutrition.png';

export const SliderItem = ({img,content, alt}: any) => {
    return (
        <div className="carousel_item">
            <Image src={img} alt={alt} loading='eager' width={32} height={32} className='rounded-full'/>
            <span>{content}</span>
        </div>
    )
}

const Slider = () => {
    const merchans = [
    {
        storeName: 'Macy\'s',
        img: image1, 
        content: 'User saved $48.19 at Macy\'s'
    },
    {
        storeName: 'Walmart',
        img: image2, 
        content: 'User saved $61.29 at Walmart'
    },
    {
        storeName: 'Nike',
        img: image3, 
        content: 'User saved $6.14 at Nike'
    },
    {
        storeName: 'Amazon',
        img: image4, 
        content: 'User saved $30.9 at Amazon'
    },
    {
        storeName: 'Kohls',
        img: image5, 
        content: 'User saved $22.10 at Kohls'
    },
    {
        storeName: 'Booking',
        img: image6, 
        content: 'User saved $29.24 at Booking'
    },
    {
        storeName: 'Aliexpress',
        img: image7, 
        content: 'User saved $60.15 at Aliexpress'
    },
    {
        storeName: 'Forever 21',
        img: image8, 
        content: 'User saved $5.8 at Forever 21'
    },
    {
        storeName: 'Udemy',
        img: image9, 
        content: 'User saved $65.21 at Udemy'
    },
    {
        storeName: 'Ebay',
        img: image10, 
        content: 'User saved $32.30 at Ebay'
    },
    {
        storeName: 'Walgreens',
        img: image11, 
        content: 'User saved $35.13 at Walgreens'
    },
    {
        storeName: 'Ulta',
        img: image12, 
        content: 'User saved $44.23 at Ulta'
    },
    {
        storeName: '100 Percent Pure',
        img: image13, 
        content: 'User saved $49.25 at 100 Percent Pure'
    },
    {
        storeName: '11 Honore',
        img: image14, 
        content: 'User saved $57.13 at 11 Honore'
    },
    {
        storeName: '1 Up Nutrition',
        img: image15, 
        content: 'User saved $35.29 at 1 Up Nutrition'
    },
    {
        storeName: '2Modern',
        img: image16, 
        content: 'User saved $5.9 at 2Modern'
    },
    {
        storeName: '2xist',
        img: image17, 
        content: 'User saved $6.29 at 2xist'
    },
    {
        storeName: '34 Heritage',
        img: image18, 
        content: 'User saved $28.21 at 34 Heritage'
    },
    {
        storeName: '360 Cashmere',
        img: image19, 
        content: 'User saved $11.8 at 360 Cashmere'
    },
    {
        storeName: '100 Percent Pure',
        img: image13, 
        content: 'User saved $49.25 at 100 Percent Pure'
    },
]; 
    return (
        <section className="carousel_container">
            <div className="carousel_wrapper">
                {
                    merchans.map((item, index) => (
                        <SliderItem key={index} content={item.content} img={item.img} alt={item.storeName}/>
                      ))
                }
            </div>
        </section>
    )
}

export default Slider