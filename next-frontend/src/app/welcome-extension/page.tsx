import { Metadata } from 'next'
import '@/assets/css/welcome.scss'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WelcomeExtensionBody from '@/components/WelcomeExtensionBody'

/* Metadata */
export const metadata: Metadata = {
  alternates: {
    canonical: '/welcome-extension',
  },
  title: `Welcome to oOhcoupons`,
  description: 'Save the most money on 200,000+ stores with the oOhcoupons browser extension, which automatically applies discount codes at checkout.',
}

const WelcomeExt = () => {
  return (
    <>
      <Nav />
      <WelcomeExtensionBody />
      <Footer />
    </>
  )
}

export default WelcomeExt