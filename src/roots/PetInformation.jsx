import React from 'react'
import { Link } from 'react-router-dom'

function PetInformation({ activeItem, onEditName, onEditWeight, onEditHeight, onEditDescription }) {
    return (
        <div className="petInformation">
            <div id="petAvatar">
                {activeItem ? <img
                    className="petImg"
                    alt="dog"
                    key={activeItem.id}
                    src={activeItem.avatar || null}
                /> : "nothing"}
                <div className="changeButton">
                    <button className="goBackButton" type="submit"><Link className="linkBack" to={'/'}>Go back</Link></button>
                </div>
            </div>
            <div className="petDescription">
                <div className="petsInfoItem">
                    {activeItem && activeItem.name ? (
                        <>
                            <p className="petName">Hi, my name is {activeItem.name}</p>
                            <form className="formEdit"><button onClick={() => onEditName(activeItem)}>Edit name</button></form>
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                </div>
                <div className="petsInfoItem">
                    {activeItem && activeItem.weight ? (
                        <>
                            <p className="petName">My weight is {activeItem.weight}</p>
                            <form className="formEdit"><button onClick={() => onEditWeight(activeItem)}>Edit weight</button></form>
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                </div>
                <div className="petsInfoItem">
                    {activeItem && activeItem.growth ? (
                        <>
                            <p className="petName">My height is {activeItem.growth}</p>
                            <form className="formEdit"><button onClick={() => onEditHeight(activeItem)}>Edit height</button></form>
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                </div>
                <div >
                    {activeItem && activeItem.usefulInfo ? (
                        <>
                            <p className="petName">{activeItem.usefulInfo}</p>
                            <form className="formEditDescription"><button onClick={() => onEditDescription(activeItem)}>Edit Description</button></form>
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                </div>
            </div>
        </div>
    )
}

export default PetInformation