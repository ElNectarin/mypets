import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css';
import RootPets from './roots/RootPets';

function App() {
  const [dogFact, setDogFact] = useState([])
  const [catFact, setCatFact] = useState([])
  const [pets, setPets] = useState([])

  useEffect(() => {
    axios.get("https://dogapi.dog/api/v1/facts?number=5").then((res) => setDogFact(res.data.facts))
    axios.get("https://meowfacts.herokuapp.com/?count=5").then((res) => setCatFact(res.data.data))
  }, [])

  useEffect(() => {
    axios.get("http://localhost:5000/pets/").then((res) => setPets(res.data))
  }, [])

  return (
    <>
      <RootPets dogFact={dogFact} catFact={catFact} pets={pets} />
    </>
  );
}

export default App;
