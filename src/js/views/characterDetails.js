import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import stars from '../../img/bg-stars.png';


export const CharacterDetails = () => {

    const params = useParams()
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getCharacter(params.uid);
    }, []);


    return (
        

        <div className="card mx-auto p-5 border border-danger border-3 text-white" style={{ backgroundImage: `url(${stars})`, width: "72rem", height: "36rem" }}>
            <div className="row g-0 d-flex align-items-center">
                <div className="col-md-4">
                <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
                        className="img-fluid"
                        alt={`A picture of ${store.character?.name}`}
                        style={{ width: "18rem", height: "24rem" }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{store.character?.name}</h4>
                        <p className="card-text">Apparently this should include some information about {store.character?.name} but, to be honest with you, I could not find any suitable content so here it goes some well deserved....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. If you have made it untill here you are a real star!</p>
                    </div>
                </div>         
            </div>
                    <hr className="border border-danger border-2 opacity-75"/>
                    <div className="card-body d-flex justify-content-between align-items-center text-center">
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Name</span>
                            <br/>
                            <span className="text-body-secondary">{store.character?.name}</span>
                        </div>
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Birth Year</span>
                            <br/>
                            <span className="text-body-secondary">{store.character?.birth_year}</span>
                        </div> 
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Gender</span>
                            <br/>
                            <span className="text-body-secondary">{store.character?.gender}</span>
                        </div> 
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Height</span>
                            <br/>
                            <span className="text-body-secondary">{store.character?.height}</span>
                        </div> 
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Eyes color</span>
                            <br/>
                            <span className="text-body-secondary">{store.character?.eye_color}</span>
                        </div>
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Hair color</span>
                            <br/>
                            <span className="text-body-secondary">{store.character?.hair_color}</span>
                        </div>
                    </div>
                </div>
            
    )
}


