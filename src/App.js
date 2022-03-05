import "./App.css";
import Categorias from "./components/Categorias";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ParticleBackground from "./components/particleBackground";


function App() {
  return (
    <div className="">
      <Header/>
      <ParticleBackground/>
      <Categorias/>
      <Footer/>
    </div>
  );
}



export default App;
