import React from "react";
import { IconStar } from '@tabler/icons-react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useParams } from "react-router";
import tatooine from "../../img/Tatooine.jpg"
import stars from '../../img/bg-stars.png';



export const PlanetList = () => {

    const params = useParams()
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getPlanet(params.uid);
    }, []);

    return (
        <div className="row m-3 p-3">
            <h2 className="text-danger">Planets</h2>
            <div className="d-flex">
                {store.planets.map((planet, id) => {
                    return (

                        <div className="card col-4 m-2 text-white" style={{ width: "18rem", backgroundImage: `url(${stars})` }} key={id}>
                            <img src={planet.uid === "1" ? tatooine : `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                                className="card-img-top"
                                alt={`A picture of ${planet.name}`}
                                style={{ width: "16rem", height: "18rem" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <div className="d-grid gap-3 d-md-block">
                                    <Link to={`/planets/${planet.uid}`} className="btn btn-primary m-2"
                                        title="Go to details"
                                    >Learn more</Link>
                                    <a className="btn btn-warning btn-sm m-2"
                                        onClick={() => {
                                            let item = planet.name
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