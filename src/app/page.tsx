import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Products } from '@/components/Products'
import { Industries } from '@/components/Industries'
import { HowItWorks } from '@/components/HowItWorks'
import { Advantages } from '@/components/Advantages'
import { Contacts } from '@/components/Contacts'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Industries />
      <HowItWorks />
      <Advantages />
      <Contacts />
      <Footer />
    </>
  )
}
