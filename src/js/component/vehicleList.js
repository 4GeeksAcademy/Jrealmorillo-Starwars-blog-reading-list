import React from "react";
import { IconStar } from '@tabler/icons-react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useParams } from "react-router";
import stars from '../../img/bg-stars.png';


export const VehicleList = () => {

    const params = useParams()
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getVehicle(params.uid);
    }, []);

    return (
        <div className="row m-3 p-3">
            <h2 className="text-danger">Vehicles</h2>
            <div className="d-flex">
                {store.vehicles.map((vehicle, id) => {
                    return (

                        <div className="card col-4 m-2 text-white" style={{ width: "18rem", backgroundImage: `url(${stars})` }} key={id}>
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                                className="card-img-top"
                                alt={`A picture of ${vehicle.name}`}
                                style={{ width: "16rem", height: "12rem" }} />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <div className="d-grid gap-3 d-md-block">
                                    <Link to={`/vehicles/${vehicle.uid}`}
                                        className="btn btn-primary m-2"
                                        title="Go to details"
                                    >Learn more</Link>
                                    <a className="btn btn-warning btn-sm m-2"
                                        onClick={() => {
                                            let item = vehicle.name
                                            actions.setFavourites(item)
                                        }}
                                        title="Add to favourites"
                                    ><IconStar color="red" size={24} /></a>
                                </div>

                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
};