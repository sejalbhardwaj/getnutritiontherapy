import Hero from './Components/Hero';
import Service from './Service';
import Testimonials from './Testimonials';
const Home = () => {
  
  const data = {
    name: "Get Nutrition Therapy",
    image:"/images/hero.jpg",
  }
  return (
    <div className="home">
    <Hero {...data} />
    <Service/>
    <Testimonials/>
  </div>
  )
}
export default Home
