import React from 'react'
import moment from "moment/moment";
import "../index.css"

function HealthPets({ activeItem }) {
    return (
        <div className="healthPets">
            <h2>My pet health</h2>
            {activeItem && activeItem.dateVaccination ? (
                <>
                    <p className="lastVaccination">The last vaccination was {moment(`${activeItem.dateVaccination}`, "YYYYMMDD").fromNow()}</p>
                </>
            ) : <p>No vaccination</p>}
        </div>
    )
}

export default HealthPets