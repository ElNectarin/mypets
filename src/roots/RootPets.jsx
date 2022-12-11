import { Link, Outlet, useLoaderData } from 'react-router-dom'
import mypetspicture from './pictures/672675.png'

export const rootLoader = async () => {
    const results = await fetch("http://localhost:5000/pets/")
    const pets = await results.json()
    return { pets }
}



const RootPets = ({ dogFact, catFact }) => {
    const { pets } = useLoaderData()

    return (
        <>
            <div id="sidebar">
                <div>
                    <h1>My Pets</h1>
                    <img src={mypetspicture} alt="mypets" className='imgpets' />
                </div>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    {pets.length ? (
                        <ul>
                            {
                                pets.map((pet) => (
                                    <li key={pet.id}>
                                        <Link
                                            key={pet.id}
                                            to={`pets/${pet.id}`}>
                                            {pet.name}
                                        </Link>
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