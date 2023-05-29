import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import yoda from '../img/yoda.png';
import stars from '../img/bg-stars.png';


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharacterDetails } from "./views/characterDetails";
import { PlanetDetails } from "./views/planetDetails";
import { VehicleDetails } from "./views/vehicleDetails";


  

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const layoutStyle = {
		backgroundImage: `url(${stars})`, // Establece la imagen de fondo
		backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir toda la página
		backgroundPosition: "center", // Centra la imagen de fondo
	};
	
	  return (
		<div style={layoutStyle}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:uid" element={<CharacterDetails/>}/>
						<Route path="/planets/:uid" element={<PlanetDetails/>}/>
						<Route path="/vehicles/:uid" element={<VehicleDetails/>}/>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
