import Image from "next/image";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Cards from "./components/Cards";
import Questions from "./components/Questions";
import Newsletter from "./components/Newsletter";
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar/>
     <Slider/>
     <Cards/>
     <Questions/>
     <Newsletter/>
     <Footer/>
    </div>
  );
}
