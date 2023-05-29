import React from "react";
import "../../styles/index.css";
import { CharacterList } from "../component/characterList";
import { PlanetList } from "../component/planetList";
import { VehicleList } from "../component/vehicleList";
import { useEffect } from "react";


export const Home = () => {


	useEffect(() => {
		document.body.classList.remove("overflow-hidden");
	  }, []);

	return (
		<>		
	<div className="scroll-container">
		<CharacterList />
	  </div>
	  <div className="scroll-container">
		<PlanetList />
	  </div>
	  <div className="scroll-container">
		<VehicleList />
	  </div>
	  </>

	);
  };
