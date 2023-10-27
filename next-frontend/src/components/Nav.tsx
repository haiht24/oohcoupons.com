import Image from 'next/image'
import Logo from '@/assets/images/oo/logo-new.png'
import Logomb from '@/assets/images/oo/logo-new.png'
import { ButtonPrimary } from './Buttons'
import '@/assets/css/nav.scss'

const Nav = ({ext}:any) => {
    
    return (
        <nav className="nav bg-white border-gray-200 fixed top-0 inset-x-0 shadow-bs-nav">
            <div className="nav-content flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <Image alt={` Logo`} src={Logo} width={127} height={35} loading="eager" priority className='hidden lg:block h-[66px] w-[66px]'/>     
                    <Image alt={`Logo`} src={Logomb} width={35} height={35} loading="eager" priority className='lg:hidden'/>     
                    <span className="self-center text-xl font-semibold whitespace-nowrap hidden">oohcoupons.com</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <ButtonPrimary text={false} cl={`dex text-white px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none flex items-center rounded-3xl`}/>
                </div>
            </div>
        </nav>
    )
}

export default Nav