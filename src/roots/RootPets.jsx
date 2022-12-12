import axios from 'axios'
import { useState } from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import mypetspicture from './pictures/672675.png'

export const rootLoader = async () => {
    const results = await fetch("http://localhost:5000/pets/")
    const pets = await results.json()
    return { pets }
}

const RootPets = ({ dogFact, catFact }) => {
    // eslint-disable-next-line no-unused-vars
    const [inputValue, setInputValue] = useState('')
    const [petsList, setPetsList] = useState([])
    const { pets } = useLoaderData()

    const onAddList = (obj) => {
        const newList = [...petsList, obj]
        setPetsList(newList)
    }

    const addPets = () => {
        const inputPet = prompt("Enter pet name", inputValue)
        if (!inputPet) {
            alert("Write pet name")
            return
        }
        axios.post("http://localhost:5000/pets/", {
            name: inputPet
        }).then(res => {
            const petsObj = { ...res.data }
            onAddList(petsObj)
        })
        return { pets }
    }

    const onRemovePet = (id) => {
        if (window.confirm('Do you want delete this pet?')) {
            const newLists = pets.filter(item => item.id !== id)
            setPetsList(newLists)
            axios.delete('http://localhost:5000/pets/' + id).catch(() => {
                alert('Cannot delete pet')
            })
        }
    }

    return (
        <>
            <div id="sidebar">
                <div>
                    <h1>My Pets</h1>
                    <img src={mypetspicture} alt="mypets" className='imgpets' />
                </div>
                <div>
                    <div
                        id="search-spinner"
                        aria-hidden
                        hidden={true}
                    />
                    <div
                        className="sr-only"
                        aria-live="polite"
                    ></div>
                    <form>
                        <button onClick={addPets} className="submitButton" type="submit">New pet</button>
                    </form>

                </div>
                <nav>
                    {pets.length ? (
                        <ul>
                            {
                                pets.map((pet) => (
                                    <li className='liPets' key={pet.id}>
                                        <Link
                                            key={pet.id}
                                            to={`pets/${pet.id}`}>
                                            {pet.name}
                                        </Link>
                                        <form><button className='removeButton' onClick={() => onRemovePet(pet.id)}>X</button></form>
                                    </li>
                                ))
                            }
                        </ul>
                    ) : ("Load")}
                </nav>
            </div>
            <div id="detail">
                <Outlet />
                <div>
                    <div>
                        <h3>Dogs facts</h3>
                        {dogFact && dogFact.map(fact => <ul className='list3b'><li>{fact}</li></ul>)}
                    </div>
                    <div>
                        <h3>Cat facts</h3>
                        {catFact && catFact.map(fact => <ul className='list3b'><li>{fact}</li></ul>)}
                    </div>
                </div>
            </div>
        </>
    );

}

export default RootPets