import Image from 'next/image'
import srcSec1 from '@/assets/images/section1.png'
import '@/assets/css/install.scss'
import { ButtonPrimary } from './Buttons'

const Section1 = () => {
  return (
    <div className='width_limit1'>
      <div className='section_area'>
        <h1 className="h1_first text-black text-center lg:pt-20 lg:pb-[120px] font-semibold px-[77px]">It’s as easy as 1, 2, 3 </h1>
        <div className="section_area_content fist_content lg:pb-[133px]">
          <div className="section_left">
            <span className="order_number number_first">01</span>
            <span>
              Join Moolah for <i>FREE</i>
            </span>
            <p className="brief_introduce">
              It only takes ONE CLICK to add Moolah to <br />
              Chrome, Firefox, Edge or Safari.
            </p>
            <ButtonPrimary link={`#`} text={`Get Started`} cl={`mt-10 w-max px-8`}/>
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