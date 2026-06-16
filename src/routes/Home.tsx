import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import Features from '@/components/home/Features'
import HowItWorks from '@/components/home/HowItWorks'
import PopularTests from '@/components/home/PopularTests'
import Testimonials from '@/components/home/Testimonials'
import CtaBand from '@/components/home/CtaBand'
import { useTitle } from '@/lib/useTitle'

export default function Home() {
  useTitle()
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <PopularTests />
      <Testimonials />
      <CtaBand />
    </>
  )
}
