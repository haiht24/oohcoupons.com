import Nav from '@/components/Nav'
import Masthead from '@/components/Masthead'
import Slider from '@/components/Slider'
import MerchantList from '@/components/MerchantList'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import CommonList from '@/components/CommonList'
import Footer from '@/components/Footer'


export default function Home() {
  const name = 'Moolah';
  return (
    <main>
      <Nav nameExt={name} />
      <Masthead />
      <Slider />
      <MerchantList />
      <Section1 />
      <Section2 />
      <Section3 />
      <CommonList />
      <Footer />
    </main>
  )
}
