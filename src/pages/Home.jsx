import Header from "../components/Header"
import Hero from "../components/home/Hero.jsx";
import Category from "../components/home/Category.jsx";
import Topcourse from "../components/home/Topcourse.jsx";
import Footer from "../components/Footer.jsx";
import Featurebooks from "../components/home/Featurebooks.jsx";

function Home() {
  return (
    <div>
        <Header />
        <main>
            <Hero />
            <Category />
            <Topcourse />
            <Featurebooks />
        </main>
        <Footer />
    </div>
  )
}

export default Home;
