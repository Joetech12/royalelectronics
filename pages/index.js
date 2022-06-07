import Head from 'next/head'
import Image from 'next/image'
import BlogSection from '../components/BlogSection'
import HeroSlider from '../components/HeroSlider'
import Partners from '../components/Partners'
import PopularSection from '../components/PopularSection'
import ServiceFeaturesSection from '../components/ServiceFeaturesSection'
import VideoSection from '../components/VideoSection'

export default function Home() {
  return (
    <div className="">

      <Head>
        <meta
          name="description"
          content="Check out all the projects I have done."
        />

        <meta property="og:title" content="Projects | Ifeanyi Umeh" />

        <meta
          property="og:description"
          content="Check out all the projects I have done."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://ifeanyiumeh.com/src/Profile_pix.png"
        />

        <meta property="og:url" content="https://ifeanyiumeh.com" />
        <title>Royal Electronics - Affordable luxury</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-sm.svg" />
        <link rel="apple-touch-icon" href="/favicon-md.svg" />
      </Head>


     <HeroSlider /> 
     <ServiceFeaturesSection />
     <PopularSection />
     <VideoSection />
     <Partners />
     <BlogSection />
    </div>
  )
}
