import Header from "../components/Header"
import Hero from "../components/home/Hero.jsx";
import Category from "../components/home/Category.jsx";
import Topcourse from "../components/home/Topcourse.jsx";
import Footer from "../components/Footer.jsx";
import Featurebooks from "../components/home/Featurebooks.jsx";
import Recentcourse from "../components/home/Recentcourse.jsx";

function Home() {
  return (
      <div className="min-h-screen flex flex-col">
        <Header />
          <main className="flex-1 pt-32 md:pt-32">
            <Hero />
            <Category />
            <Topcourse />
            <Featurebooks />
            <Recentcourse />
        </main>
        <Footer />
    </div>
  )
}

export default Home;
