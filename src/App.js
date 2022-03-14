import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Context from "./hooks/Context";
import item from "../src/assets/item"

// import ParticleBackground from "./components/particleBackground";

function App() {

  const[data,setData] = useState(item)


  return (
    <Context.Provider value={{data,setData}} className="">

        {/* <ParticleBackground/> */}
            
        <Outlet/>
        
    </Context.Provider>
  );
}



export default App;
