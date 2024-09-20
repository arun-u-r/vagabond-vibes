
import Booking from './components/Booking'
import CarouselGallery from './components/CarouselGallery'
import Footer from './components/Footer'
// import Gallery from './components/Gallery'
import HeroBlock from './components/HeroBlock'
import Navbar from './components/Navbar'
import OtherActivity from './components/OtherActivity'
import Showcase from './components/Showcase'
import Topbar from './components/Topbar'

function App() {

  return (
    <>
      <Topbar/>
      <Navbar/>
      <HeroBlock/>
      <OtherActivity/>
      <Booking/>
      <CarouselGallery/>
      <Showcase/>
      {/* <Gallery/> */}
      <Footer/>
    </>
  )
}

export default App
