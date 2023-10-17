import Image from 'next/image'
import Logo from '@/assets/images/moolah.webp'
import Logomb from '@/assets/images/moolah-logo.png'
import '@/assets/css/nav.scss'

const Nav = ({nameExt}:any) => {
    
    return (
        <nav className="nav bg-white border-gray-200 fixed top-0 inset-x-0 shadow-bs-nav">
            <div className="nav-content flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="https://flowbite.com" className="flex items-center">
                    <Image alt={`${nameExt} Logo`} src={Logo} width={127} height={35} loading="eager" className='hidden lg:block'/>     
                    <Image alt={`${nameExt} Logo`} src={Logomb} width={35} height={35} loading="eager" className='lg:hidden'/>     
                    <span className="self-center text-xl font-semibold whitespace-nowrap hidden">{nameExt}</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <a href="#" className="dex text-white px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none flex items-center rounded-3xl">{`Add ${nameExt} Now`}</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav