import Image from 'next/image'
import srcSec3 from '@/assets/images/section3.png'
import '@/assets/css/install.scss'
import { ButtonPrimary } from './Buttons'

const Section3 = () => {
  return (
    <div className="width_limit1">
      <div className="section_area">
        <div className="section_area_content">
          <div className="section_left ">
            <span className="order_number">03</span>
            <span>Save Instantly</span>
            <p className="brief_introduce">
              Moolah will automatically apply the best coupon codes at checkout so
              you can shop confidently.{" "}
            </p>
            <ButtonPrimary
              link={`#`}
              text= {` Add Moolah to Chrome - It's Free!`}
              cl={`mt-10 px-8 overflow-hidden lg:w-fit`}
            >
            
            </ButtonPrimary>
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