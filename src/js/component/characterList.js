import { useContext, useEffect } from "react";
import React from "react";
import { IconStar } from '@tabler/icons-react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import stars from '../../img/bg-stars.png';



export const CharacterList = () => {

    const params = useParams()
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getCharacter(params.uid);
    }, []);
   

    return (

        <div className="row m-3 p-3">
            <h2 className="text-danger">Characters</h2>
            <div className="d-flex">
                {store.characters.map((character, id) => {
                    return (

                        <div className="card col-4 m-2 text-white" style={{ width: "18rem", backgroundImage: `url(${stars})` }} key={id}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                                className="card-img-top"
                                alt={`A picture of ${character.name}`}
                                style={{ width: "16rem", height: "22rem" }} />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <div className="d-grid gap-3 d-md-block">
                                    <Link to={`/character/${character.uid}`} className="btn btn-primary m-2" title="Go to details">Learn more</Link>
                                    <a className="btn btn-warning btn-sm m-2" 
                                        onClick={() => {
                                            let item = character.name    
                                            actions.setFavourites(item)}}
                                            title="Add to favourites"
                                            ><IconStar color="red" size={24} /></a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};



