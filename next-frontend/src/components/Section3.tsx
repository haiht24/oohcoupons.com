import Image from 'next/image'
import srcSec1 from '@/assets/images/section1.png'
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
            <a
              href="/?utm_source=moolah&utm_page=pc_home&utm_block=mid5&direct=1"
              target="_blank"
            >
              Add Moolah to Chrome - It's Free!
            </a>
          </div>
          <div className="section_right">
            <img
              className="section3_img"
              src="https://www.joinmoolah.com/www/images/index/section3.png"
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section3