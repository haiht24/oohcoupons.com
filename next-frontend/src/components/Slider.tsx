import Image from 'next/image'
import Temu from '@/assets/images/temu.png'
import '@/assets/css/slider.scss'

export const SliderItem = ({content}: any) => {
    return (
        <div className="carousel_item">
            <Image src={Temu} alt="Walmart" loading='lazy' width={32} height={32} />
            <span>{content}</span>
        </div>
    )
}

const Slider = () => {
    const merchans = [ // Demo Data
    'User saved $67.95 at Booking', 'User saved $67.95 at Booking','User saved $67.95 at Booking',
    'User saved $67.95 at Booking','User saved $67.95 at Booking', 'User saved $67.95 at Booking',
    'User saved $67.95 at Booking','User saved $67.95 at Booking', 'User saved $67.95 at Booking',
    'User saved $67.95 at Booking','User saved $67.95 at Booking', 'User saved $67.95 at Booking',
    'User saved $67.95 at Booking','User saved $67.95 at Booking', 'User saved $67.95 at Booking', 
    'User saved $67.95 at Booking','User saved $67.95 at Booking', 'User saved $67.95 at Booking',
]; 
    return (
        <section className="carousel_container">
            <div className="carousel_wrapper">
                {
                    merchans.map((item, index) => (
                        <SliderItem key={index} content={item} />
                      ))
                }
            </div>
        </section>
    )
}

export default Slider