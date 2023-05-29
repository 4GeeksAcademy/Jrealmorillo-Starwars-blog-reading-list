const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],
			character: null,
			planets: [],
			planet: null,
			vehicles: [],
			vehicle: null,
			favourites: [],
	},
		actions: {
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => setStore({characters: data.results}))
				.catch(err => console.error(err))
			},


			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(data => setStore({planets: data.results}))
				.catch(err => console.error(err))
			},

			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(res => res.json())
				.then(data => setStore({vehicles: data.results}))
				.catch(err => console.error(err))
			},

			getCharacter: (uid) => {
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(res => res.json())
					.then(data => setStore({ character: data.result.properties }))
					.catch(err => console.error(err));
			},
			

			getPlanet: (uid) => {
				fetch("https://www.swapi.tech/api/planets/" + uid)
				.then(res => res.json())
				.then(data => setStore({planet: data.result.properties}))
				.catch(err => console.error(err))
			},

			getVehicle: (uid) => {
				fetch("https://www.swapi.tech/api/vehicles/" + uid)
				.then(res => res.json())
				.then(data => setStore({vehicle: data.result.properties}))
				.catch(err => console.error(err))
			},

			setFavourites: (item) => {
				const store = getStore()
				let isAlreadyFavourite = store.favourites.includes(item)
				if (!isAlreadyFavourite){
					setStore({favourites: [...store.favourites, item]})
				}
			},

			removeFromFavourites: (item) => {
				const store = getStore()
				let newFavourites = store.favourites.filter((element) => element !== item)
				setStore({favourites: newFavourites})
			}
	   	
		}
	};
};

export default getState;
