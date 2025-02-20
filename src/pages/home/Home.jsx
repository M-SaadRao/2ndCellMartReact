import React from 'react'
import Hero from '../../components/hero/Hero'
import Cards from '../../components/cards/Cards'
import BrandsSlider from '../../components/brandsSlider/BrandsSlider'
import TopChoice from '../../components/topChoice/TopChoice'


function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <TopChoice />
      <BrandsSlider />
    </div>
  )
}

export default Home
