import Image from 'next/image'
import srcSec1 from '@/assets/images/oo/Image 1/home-1.png'
import '@/assets/css/install.scss'
import { ButtonPrimary } from './Buttons'

const Section1 = () => {
  return (
    <div className='width_limit1'>
      <div className='section_area'>
        <h1 className="h1_first text-black text-center lg:pt-20 lg:pb-[120px] font-semibold px-[77px]">It’s free and easy!</h1>
        <div className="section_area_content fist_content lg:pb-[133px]">
          <div className="section_left">
            <span className="order_number number_first">01</span>
            <span style={{ lineHeight: '45px' }}>
              Install the oOhcoupons extension for <i>FREE</i>
            </span>
            <p className="brief_introduce">
              Add the oOhcoupons to your browser with only
              ONE CLICK.
            </p>
            <ButtonPrimary link={`#`} text={`Add oOhcoupons`} cl={`mt-10 w-max px-8`} />
          </div>
          <div className="section_right">
            <Image src={srcSec1} alt={`sec1`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1