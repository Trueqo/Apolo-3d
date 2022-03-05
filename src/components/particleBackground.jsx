import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "../config/ParticleConfig";

export default function ParticleBackground(){
    return(
        <div className="z-0 relative">
            <Particles className="z-0" params={ParticleConfig}></Particles>
        </div>
    );
}