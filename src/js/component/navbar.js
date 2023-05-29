import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/star-wars-logo-5.png"
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import stars from '../../img/bg-stars.png';



export const Navbar = () => {

	const { store, actions } = useContext(Context)

	const removeFavourite = (item) => {
		actions.removeFromFavourites(item);
	};

	return (
		<nav className="navbar navbar-light mb-3" style={{backgroundImage: `url(${stars})`}}>
			<Link to="/">
			<img className="logo w-25 h-25 p-2 m-2" src={starWarsLogo} alt="Star Wars Logo" title="Go to home"/>
			</Link> 
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle m-3 p-3" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="These are your favourites">
						Favourites<span className="bg-secondary m-1 p-1">{store.favourites.length}</span>
					</button>
					
						<ul className="dropdown-menu" style={{ display: store.favourites.length > 0 ? "inline-block" : "none" }}>
							
							{store.favourites.map((element) => {
							return (
								<li key={element}>
									<a className="dropdown-item d-flex align-items-center justify-content-between">{element}
										<FontAwesomeIcon icon={faTrashAlt} onClick={() => removeFavourite(element)}/>
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
