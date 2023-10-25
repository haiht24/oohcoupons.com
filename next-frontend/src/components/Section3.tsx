import Image from 'next/image'
import srcSec3 from '@/assets/images/oo/Image 3/home-3.png'
import '@/assets/css/install.scss'
import { ButtonPrimary } from './Buttons'

const Section3 = ({ext}:any) => {
  return (
    <div className="width_limit1">
      <div className="section_area">
        <div className="section_area_content">
          <div className="section_left ">
            <span className="order_number">03</span>
            <span>Enjoy Savings</span>
            <p className="brief_introduce">
            Shop confidently knowing that oOhcoupons has got your back.{" "}
            </p>
            <ButtonPrimary
              link={`#`}
              text={false}
              cl={`mt-10 px-8 overflow-hidden lg:w-fit`}
            />
          </div>
          <div className="section_right">
            <Image
              className="section3_img"
              src={srcSec3}
              alt='srcSec3'
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section3