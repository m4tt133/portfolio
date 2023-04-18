import About from '@/components/Home/About'
import Contact from '@/components/Home/Contact'
import Hero from '@/components/Home/Hero'
import Knowledge from '@/components/Home/Knowledge'
import Portfolio from '@/components/Home/Portfolio'
import Technologies from '@/components/Home/Technologies'
import Header from '@/components/Navigation/Header'
import { fetchAPI } from '@/lib/strapi'
import { GetStaticProps } from 'next'

interface Props {
  attributes: {
    content: object
  }
} 

interface Props {
  response: Props
}

export default function Home({ response }: Props): React.ReactElement {
  const { attributes: content } = response;
 
  return (
    <section className='overflow-hidden'>
      <Header/>
      <Hero content={content.Hero}/>
      <About content={content.About}/>
      <Portfolio content={content.Portfolio} />
      <Knowledge content={content.Knowledge} />
      <Technologies content={content.Technologies} />
      <Contact content={content.Contact} />
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response: object = await fetchAPI('/homepage?populate=deep');

  const content = response.data;

  return{
    props: {
      response: content
    }
  }
}