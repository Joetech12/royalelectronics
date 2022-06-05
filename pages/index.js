import Head from 'next/head'
import Image from 'next/image'
import HeroSlider from '../components/HeroSlider'

export default function Home() {
  return (
    <div className="flex justify-center">
     <HeroSlider /> 
    </div>
  )
}
