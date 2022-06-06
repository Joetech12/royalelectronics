import Head from 'next/head'
import Image from 'next/image'
import HeroSlider from '../components/HeroSlider'

export default function Home() {
  return (
    <div className="">
     <HeroSlider /> 
     <img src="/1.png" alt="" />
     <img src="/1.png" alt="" />
     <img src="/1.png" alt="" />
    </div>
  )
}
