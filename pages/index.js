import Head from 'next/head'
import Image from 'next/image'
import HeroSlider from '../components/HeroSlider'
import PopularSection from '../components/PopularSection'
import ServiceFeaturesSection from '../components/ServiceFeaturesSection'

export default function Home() {
  return (
    <div className="">
     <HeroSlider /> 
     <ServiceFeaturesSection />
     <PopularSection />
    </div>
  )
}
