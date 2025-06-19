import React from 'react'

import HeroSection from '../components/HeroSection/HeroSection'
import CustomersFavorites from '../components/CustomerFavorites/CustomerFavorites'
import Cards from '../components/Cards/Card'
import OurTrending from '../components/OurTrending/OurTrending'
// import Memories from '../components/Memories'
import Memories from '../components/Memories/Memories'
// import WeddingJourney from '../components/WeddingJourney'
import WeddingJourney from '../components/WeddingJourney/WeddingJourney'
// import OurCustomers from '../components/OurCustomers'
import OurCustomers from '../components/OurCustomers/OurCustomers'
// import PromiseCard from '../components/PromiseCard'

const Home = () => {
  return (
    <div className='home-page' style={{padding: '0 6%'}}>
      <HeroSection />
      <CustomersFavorites />
      <Cards />
      <OurTrending />
      <Memories/>
      <WeddingJourney/>
      <OurCustomers/>
      {/* <PromiseCard/> */}
    </div>
  )
}

export default Home