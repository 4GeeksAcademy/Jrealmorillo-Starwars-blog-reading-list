import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharacterDetails } from "./views/characterDetails";
import { PlanetDetails } from "./views/planetDetails";
import { VehicleDetails } from "./views/vehicleDetails";
import { Intro } from "./views/intro";
import { useEffect, useState } from "react";



//create your first component
const Layout = () => {

	const [showIntro, setShowIntro] = useState(true);
	const [showNavbar, setShowNavbar] = useState(false);
	const [showFooter, setShowFooter] = useState(false);

	useEffect(() => {

		setShowNavbar(!showIntro);
		setShowFooter(!showIntro);
	  
		const timer = setTimeout(() => {
		  setShowIntro(false);
		}, 25000);
	  
		return () => {
		  clearTimeout(timer);
		};
	  }, [showIntro]);

	  useEffect(() => {
		document.body.classList.add("overflow-hidden");
	  		return () => {
		  document.body.classList.remove("overflow-hidden");
		};
	  }, []);

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{showNavbar && <Navbar />}
					{showIntro ? (
						<Intro onFinish={() => setShowIntro(false)} />
					) : (
						
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/character/:uid" element={<CharacterDetails />} />
							<Route path="/planets/:uid" element={<PlanetDetails />} />
							<Route path="/vehicles/:uid" element={<VehicleDetails />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
					)}
					{showFooter && <Footer />}
				</ScrollToTop>

			</BrowserRouter>
		</div>
	);
}

export default injectContext(Layout);








