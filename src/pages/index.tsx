import About from '@/components/Home/About'
import Contact from '@/components/Home/Contact'
import Hero from '@/components/Home/Hero'
import Knowledge from '@/components/Home/Knowledge'
import Portfolio from '@/components/Home/Portfolio'
import Technologies from '@/components/Home/Technologies'
import Header from '@/components/Navigation/Header'
import FixedVideo from '@/components/Home/Video'

export default function Home(): React.ReactElement {
  return (
    <section className='overflow-hidden'>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Knowledge />
      <Technologies />
      <Contact />
      <FixedVideo />
    </section>
  )
}