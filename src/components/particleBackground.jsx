import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "../config/ParticleConfig";

export default function ParticleBackground(){
    return(
        <div className="absolute z-0 ">
            <Particles className="z-0" params={ParticleConfig}></Particles>
        </div>
    );
}