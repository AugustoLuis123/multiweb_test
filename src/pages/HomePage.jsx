import {Hero, Aboutus, Albums, Videos, Marketplace, Contact} from '../sections';

const HomePage = () => {
  return (
    <>
    <main className='relative overflow-hidden'>
    <Hero/>
    <Aboutus/>
    <Albums/>
    <Videos/>
    <Marketplace/>
    <Contact/>
    </main>
    </>   
    
    
  )
}

export default HomePage