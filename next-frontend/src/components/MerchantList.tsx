import Image from 'next/image'
import Merchan from '@/assets/images/6.png'
import { ButtonPrimary } from './Buttons'
import '@/assets/css/merchantlist.scss'

export const MerchantItem = () => {
    return (
        <div className='inline-block'>
            <a href="" target="_blank">
                <Image src={Merchan} alt={'merchan'} loading='lazy' width={90} height={90}/>
            </a>
        </div>
    )
}


const MerchantList = ({nameExt}:any) => {
    return (
        <>
            <section className='merchant_list'>
                <h2>200,000+ Stores</h2>
                <h3>The oOhcoupons extension automatically searches for coupons on 200,000+ sites around the globe.</h3>
                <div className='merchant_item grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-6'>
                    {[...Array(12)].map((_, i) => (
                        <MerchantItem key={i} />
                        ))}
                </div>
            </section>
            <section className='features_list'>
            <h1>Why spend more?</h1>
            <h2>Try oOhcoupons for automatic coupon codes at checkout.</h2>
            <ButtonPrimary link={`#`} text={false} cl={`mt-[30px] mb-[60px] block w-full lg:w-[300px] lg:mb-[100px] mx-auto`}/>
            </section>
        </>
    )
}

export default MerchantList