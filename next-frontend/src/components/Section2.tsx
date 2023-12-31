import Image from 'next/image'
import srcSec2 from '@/assets/images/oo/Image 2 - Gif/home-2.gif'
// import srcSec2Gif from '@/assets/images/section2.gif'
import '@/assets/css/install.scss'
import { ButtonPrimary } from './Buttons'

const Section2 = () => {
  return (
    <div className="width_limit2">
      <div className="section_area">
        <div className="section_area_content">
          <div className="section_right section_img">
            <Image
              className="section2_img"
              src={srcSec2}
              alt='srcSec2'
            />
            {/* <Image
              className="section_img_gif"
              src={srcSec2Gif}
              alt='srcSec2Gif'
            /> */}
          </div>
          <div className="section_left">
            <span className="order_number">02</span>
            <span>Instant Coupon Finder.</span>
            <p className="brief_introduce">
            The oOhcoupons extension automatically searches for and applies the coupon code to your shopping cart.{" "}
            </p>
            <ButtonPrimary text={`Install Now`} cl={`mt-10 w-max px-8`}/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section2