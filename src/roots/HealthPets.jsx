/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import moment from "moment/moment";
import "../index.css"

function HealthPets({ activeItem, pets }) {
    return (
        <div className="healthPets">
            <h2>My pet health</h2>
            {activeItem && activeItem.dateVaccination ? (
                <>
                    <p className="lastVaccination">The last vaccination was {moment(`${activeItem.dateVaccination}`, "YYYYMMDD").fromNow()}</p>
                </>
            ) : <p>No vaccination</p>}
            <div>{activeItem && activeItem.photoVaccination ? (
                <img className='imgVaccination' src={activeItem.photoVaccination} />
            ) : <p>No photo vaccination</p>
            }
            </div>
        </div>
    )
}

export default HealthPets