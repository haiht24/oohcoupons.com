import Image from 'next/image'
import { ButtonPrimary } from './Buttons'
import '@/assets/css/masthead.scss'
import AllBrowser from '@/assets/images/browser-all.png'
import Sideup from '@/assets/images/sideup.gif'
import Sidedown from '@/assets/images/sidedown.png'

const Masthead = () => {
    return (
        <section id='masthead' className='masthead'>
            <div className='masthead-content'>
                <div className='masthead-content-left'>
                    <h1>
                        Online savings,
                        <br />
                        simplified
                    </h1>
                    <div className='simple_introduce mt-5 flex flex-col'>
                        <span>
                            {`Don't miss out today's top coupons at`} <i>60,000+</i> online stores. With{" "}
                            <i>ONE CLICK</i>, Moolah will automatically find and apply the best codes at
                            checkout - in seconds.
                        </span>
                        <span>Trusted by <i> 100,000+ </i> members.</span>
                        <span>
                            Get reward points or gift cards by shopping with Moolah
                        </span>
                    </div>
                    <div className="add_tochrome mt-10 flex items-center">
                        <ButtonPrimary link={`#`} text={`Add Moolah to Chrome`} cl={` block lg:mr-[15px] lg:w-[250px]`}/>
                        <Image src={AllBrowser} alt='all-browser' height={36} width={113.14} className='inline-block' />
                    </div>
                    <div className="add_tips mt-5">
                        It only takes 1 click to add Moolah to Chrome, Firefox, Edge or Safari
                    </div>
                </div>
                <div className='masthead-content-right'>
                    <Image src={Sideup} className="sideup" alt='sideup' loading='lazy'/>
                    <Image src={Sidedown} className="sidedown" alt='sidedown'loading='lazy'/>
                </div>
            </div>
        </section>
    )
}

export default Masthead