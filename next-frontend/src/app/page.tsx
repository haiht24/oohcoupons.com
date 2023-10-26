import Nav from '@/components/Nav';
import Masthead from '@/components/Masthead';
import Slider from '@/components/Slider';
import MerchantList from '@/components/MerchantList';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import CommonList from '@/components/CommonList';
import Footer from '@/components/Footer';
import { Metadata } from 'next'

/* Metadata */
export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  title: `Automatically finds & applies coupon codes - oOhCoupons`,
  description: 'The oOhcoupons browser extension automatically finds for and applies discount codes at checkout with just a single click.',
}

export default function Home() {
  const nameExt = 'oOH';
  return (
    <main>
      <Nav nameExt={nameExt} />
      <Masthead />
      <Slider />
      <MerchantList nameExt={nameExt} />
      <Section1 />
      <Section2 />
      <Section3 />
      <CommonList nameExt={nameExt} />
      <Footer />
    </main>
  );
}
