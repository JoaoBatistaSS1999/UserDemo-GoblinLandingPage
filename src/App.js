import Card from "./Card";
import Header from "./components/Header";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./components/Footer";
import { Hero } from "./Hero";
import Resume from "./Resume";
import Stats from "./Stats";
import Tecnologies from "./Tecnologies";

function App() {
  return (
    <div className="selection:bg-teal-600 selection:text-black">
      <Header />
      <Hero />
      <Stats />
      <Card />
      <Tecnologies />
      <Features />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
