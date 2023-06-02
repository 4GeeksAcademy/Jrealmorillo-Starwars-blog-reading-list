import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import stars from '../../img/bg-stars.png';


export const VehicleDetails = () => {

    const params = useParams()
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getVehicle(params.uid);
    }, []);


    return (
        

        <div className="card mx-auto border border-danger border-3 text-white" style={{ backgroundImage: `url(${stars})`, width: "72rem", height: "36rem" }}>
            <div className="row g-0 d-flex align-items-center">
                <div className="col-4">
                <img
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`}
                        className="img-fluid"
                        alt={`A picture of ${store.vehicle?.name}`}
                        style={{ width: "18rem", height: "18rem" }}
                    />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h4 className="card-title">{store.vehicle?.name}</h4>
                        <p className="card-text">Apparently this should include some information about {store.vehicle?.name} itself but, to be honest with you, I could not find any suitable content so here it goes some well deserved....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. If you have made it untill here you are a real star!</p>
                    </div>
                </div>         
            </div>
                    <hr className="border border-danger border-2 opacity-75"/>
                    <div className="card-body d-flex justify-content-between align-items-center text-center">
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Name</span>
                            <br/>
                            <span className="text-body-secondary">{store.vehicle?.name}</span>
                        </div>
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Model</span>
                            <br/>
                            <span className="text-body-secondary">{store.vehicle?.model}</span>
                        </div> 
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Length</span>
                            <br/>
                            <span className="text-body-secondary">{store.vehicle?.length}</span>
                        </div> 
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Passengers</span>
                            <br/>
                            <span className="text-body-secondary">{store.vehicle?.passengers}</span>
                        </div> 
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Cargo Capacity</span>
                            <br/>
                            <span className="text-body-secondary">{store.vehicle?.cargo_capacity}</span>
                        </div>
                        <div className="m-3">
                            <span className="text-body-secondary fs-5">Manufacturer</span>
                            <br/>
                            <span className="text-body-secondary">{store.vehicle?.manufacturer}</span>
                        </div>
                    </div>
                </div>
            
    )
}