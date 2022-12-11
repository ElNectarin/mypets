import { Form, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import "../index.css"
import PetsTodo from "./PetsTodo/PetsTodo";

// export const petLoader = async ({ params }) => {
//     const results = await fetch(`http://localhost:5000/pets/`)
//     const pet = await results.json()
//     return pet
// }



export default function Pets() {
    const [activeItem, setActiveItem] = useState(null)
    const [pets, setPets] = useState([])

    let params = useParams()

    useEffect(() => {
        axios.get("http://localhost:5000/pets/").then((res) => setPets(res.data))
    }, [])

    useEffect(() => {
        if (pets) {
            const pet = pets.find(pet => pet.id === Number(params.petId));
            setActiveItem(pet)
            console.log(pet)
        }
    }, [params.petId, pets]);

    return (
        <div className="container">
            <div className="petsContainer">
                <div className="petInformation">
                    <div id="petAvatar">
                        {activeItem ? <img
                            className="petImg"
                            alt="dog"
                            key={activeItem.id}
                            src={activeItem.avatar || null}
                        /> : "nothing"}
                        <div className="changeButton">
                            <Form action="edit">
                                <button className="editButton" type="submit">Edit</button>
                            </Form>
                            <Form
                                method="post"
                                action="destroy"
                                onSubmit={(event) => {
                                    if (
                                        !window.confirm(
                                            "Please confirm you want to delete this record."
                                        )
                                    ) {
                                        event.preventDefault();
                                    }
                                }}
                            >
                                <button className="destroyButton" type="submit">Delete</button>
                            </Form>
                        </div>
                    </div>
                    <div className="petDescription">
                        <div>
                            {activeItem && activeItem.name ? (
                                <>
                                    <p className="petName">Hi, my name is {activeItem.name}</p>
                                </>
                            ) : (
                                <i>No Name</i>
                            )}{" "}
                        </div>
                        <div>
                            {activeItem && activeItem.weight ? (
                                <>
                                    <p className="petName">My weight is {activeItem.weight}</p>
                                </>
                            ) : (
                                <i>No Name</i>
                            )}{" "}
                        </div>
                        <div>
                            {activeItem && activeItem.growth ? (
                                <>
                                    <p className="petName">My height is {activeItem.growth}</p>
                                </>
                            ) : (
                                <i>No Name</i>
                            )}{" "}
                        </div>
                        <div>
                            {activeItem && activeItem.usefulInfo ? (
                                <>
                                    <p className="petName">{activeItem.usefulInfo}</p>
                                </>
                            ) : (
                                <i>No Name</i>
                            )}{" "}
                        </div>
                    </div>
                </div>
                <div className="healthPets">
                    <h2>My pet health</h2>
                    <p>Hello</p>
                    </div>
            </div>
            <PetsTodo />
        </div>
    )
}