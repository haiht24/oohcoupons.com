import Image from 'next/image'
import { ButtonPrimary } from './Buttons'
import '@/assets/css/masthead.scss'
import AllBrowser from '@/assets/images/browser-all.png'
import Chrome from '@/assets/images/oo/chrome.png'
import Edge from '@/assets/images/oo/microsoft.png'
import FireFox from '@/assets/images/oo/firefox.png'
import Safari from '@/assets/images/oo/safari.png'
import Sideup from '@/assets/images/oo/Top - Gif/ex-gif-done.gif'
import Sidedown from '@/assets/images/sidedown.png'

const Masthead = ({ ext }: any) => {
    return (
        <section id='masthead' className='masthead'>
            <div className='masthead-content'>
                <div className='masthead-content-left'>
                    <h1>
                        Work less,
                        <br />
                        save more
                    </h1>
                    <div className='simple_introduce mt-5 flex flex-col'>
                        <span>
                            oOhcoupons finds, tests and applies promo codes automatically for you at checkout, to ensure you score the best deal—every time.</span>
                        <span>
                            Save on all your purchases in just 1 click.
                        </span>
                    </div>
                    <div className="add_tochrome mt-10 flex items-center">
                        <ButtonPrimary link={`#`} text={`Add to ${ext} - It's Free`} cl={` block lg:mr-[15px] lg:w-[350px]`} />
                        {
                            ext === 'Google Chrome' && (
                                <Image src={Chrome} alt='chrome' height={36} width={36} className='inline-block' />
                            )}
                        {
                            ext === 'Microsoft Edge' && (
                                <Image src={Edge} alt='chrome' height={36} width={36} className='inline-block' />
                            )
                        }
                        {
                            ext === 'Mozilla Firefox' && (
                                <Image src={FireFox} alt='Mozilla Firefox' height={36} width={36} className='inline-block' />
                            )
                        }
                        {
                            ext === 'Safari' && (
                                <Image src={Safari} alt='Safari' height={36} width={36} className='inline-block' />
                            )
                        }
                    </div>
                    <div className="add_tips mt-5">
                        It only takes 1 click to add Moolah to Chrome, Firefox, Edge or Safari
                    </div>
                </div>
                <div className='masthead-content-right'>
                    <Image src={Sidedown} className="sidedown" alt='sidedown' loading='lazy' />
                    <Image src={Sideup} className="sideup" alt='sideup' loading='lazy' />
                </div>
            </div>
        </section>
    )
}

export default Masthead