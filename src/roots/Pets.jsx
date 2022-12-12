import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import "../index.css"
import PetsTodo from "./PetsTodo/PetsTodo";
import HealthPets from "./HealthPets";
import PetInformation from "./PetInformation";

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
        }
    }, [params.petId, pets]);

    const onEditName = (petObj) => {
        const newPetName = window.prompt("The pet's name", petObj.name)

        if (!newPetName) {
            return
        }
        axios.patch('http://localhost:5000/pets/' + petObj.id, {
            name: newPetName
        })
            .catch(() => {
                alert('Не удалось обновить задачу');
            })
    }

    const onEditWeight = (petObj) => {
        const newPetWeight = window.prompt("The pet's weight", petObj.weight)

        if (!newPetWeight) {
            return
        }
        axios.patch('http://localhost:5000/pets/' + petObj.id, {
            weight: newPetWeight
        })
            .catch(() => {
                alert('Не удалось обновить задачу');
            })
    }

    const onEditHeight = (petObj) => {
        const newPetHeight = window.prompt("The pet's height", petObj.height)
        if (!newPetHeight) {
            return
        }
        axios.patch('http://localhost:5000/pets/' + petObj.id, {
            height: newPetHeight
        })
            .catch(() => {
                alert('Не удалось обновить задачу');
            })
    }
    const onEditDescription = (petObj) => {
        const newPetDescription = window.prompt("The pet's usefulInfo", petObj.usefulInfo)

        if (!newPetDescription) {
            return
        }
        axios.patch('http://localhost:5000/pets/' + petObj.id, {
            usefulInfo: newPetDescription
        })
            .catch(() => {
                alert('Не удалось обновить задачу');
            })
    }


    return (
        <div className="container">
            <div className="petsContainer">
                <PetInformation activeItem={activeItem}
                    onEditName={onEditName}
                    onEditWeight={onEditWeight}
                    onEditHeight={onEditHeight}
                    onEditDescription={onEditDescription}
                />
                <HealthPets activeItem={activeItem} />
            </div>
            <PetsTodo />
        </div>
    )
}