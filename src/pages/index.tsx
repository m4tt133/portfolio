import About from '@/components/Home/About'
import Contact from '@/components/Home/Contact'
import Hero from '@/components/Home/Hero'
import Knowledge from '@/components/Home/Knowledge'
import Portfolio from '@/components/Home/Portfolio'
import Technologies from '@/components/Home/Technologies'
import Header from '@/components/Navigation/Header'
import FixedVideo from '@/components/Home/Video'
import Design from '@/components/Home/Design'
import Head from 'next/head'

export default function Home(): React.ReactElement {
  return (
    <>
      <Head>
          <title>Mateusz Kąpała - Design & Business Focused Developer</title>
          <meta
              name="description"
              content="A value-centric developer delivering results through code, design, and business expertise."
              key="description"
          />
          <link
              rel="canonical"
              content="https://mkapala.pl"
          />
          <meta
              property="og:type"
              content="article"
          />
          <meta
              property="og:url"
              content="https://mkapala.pl"
              key="og:url"
          />
          <meta
              property="og:title"
              content="Mateusz Kąpała - Design & Business Focused Developer"
              key="og:title"
          />
          <meta
              property="og:description"
              content="A value-centric developer delivering results through code, design, and business expertise."
              key="og:description"
          />
          <meta
              property="og:image"
              content="https://mkapala.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesign-cover.06e24270.png&w=1080&q=75"
              key="og:image"
          />
          <meta
              name="twitter:title"
              content="Mateusz Kąpała - Design & Business Focused Developer"
          />
          <meta
              name="twitter:url"
              content="https://mkapala.pl"
          />
          <meta
              name="twitter:description"
              content="A value-centric developer delivering results through code, design, and business expertise."
          />
          <meta
              name="twitter:image"
              content="https://mkapala.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesign-cover.06e24270.png&w=1080&q=75"
          />
          <meta
              name="twitter:card"
              content="https://mkapala.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesign-cover.06e24270.png&w=1080&q=75"
              key="twitter:card"
          />
      </Head>
      <section className='overflow-hidden'>
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Design/>
        <Technologies />
        <Knowledge />
        <Contact />
        <FixedVideo />
      </section>
    </>
  )
}