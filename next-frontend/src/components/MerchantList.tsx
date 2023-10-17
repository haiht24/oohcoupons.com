import Image from 'next/image'
import Merchan from '@/assets/images/6.png'
import { ButtonPrimary } from './Buttons'
import '@/assets/css/merchantlist.scss'

export const MerchantItem = () => {
    return (
        <li className='inline-block'>
            <a
                href="https://www.joinmoolah.com/track?pos=home_merchant_list&url=http%3A%2F%2Fwww.target.com%2F&is_web"
                target="_blank">
                <Image src={Merchan} alt={'merchan'} loading='lazy' width={90} height={90}/>
            </a>
        </li>
    )
}


const MerchantList = () => {
    return (
        <>
            <section className='merchant_list'>
                <h2>More than 60,000 merchants</h2>
                <h3>Moolah works in tens of thousands of stores in United States, United Kingdom, Canada, Australia, Germany, France ...</h3>
                <div className='merchant_item grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-6'>
                    {[...Array(12)].map((_, i) => (
                        <MerchantItem key={i} />
                        ))}
                </div>
            </section>
            <section className='features_list'>
            <h1>Features of Moolah</h1>
            <h1>Could online savings be any easier?</h1>
            <h2>Try moolah for automatic coupon codes and  reward points.</h2>
            <ButtonPrimary link={`#`} text={`Add Moolah to Chrome`} cl={`mt-[30px] mb-[60px] lg:mt-[70px] lg:mb-[100px] block w-full lg:w-[250px] mx-auto`}/>
            </section>
        </>
    )
}

export default MerchantList