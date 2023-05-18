import { Route, Routes } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import CarDetails from "./components/CarDetails";
import GithubUser from "./components/CustomHook/GitHubUser";
import Filteredlist from "./components/FiltredList";
import DisplayLanguage from "./components/displayLanguage";
import { useState } from "react";
import Counter from "./Counter";
import ShowGithubUser from "./components/CustomHook/ShowGithubUser";

function App() {
  
  const [language, setLanguage] = useState('en')
  
  function handleChange(event){
    setLanguage(event.target.value)
  }
  const car = {
    brand: "ferrari",
    model : "458italia",
    year : 2010,
    color : "red"
  }

  const person = [
    {
      name: "davide",
      id: 1,
      age: 19,
    },
    {
      name: "fabio",
      id: 2,
      age: 15,
    },
    {
      name: "fabiola",
      id: 3,
      age: 21,
    },
  ];

  return (
    <div>
      {/* <GithubUser username='DavideCatanzaro'/>
      <CarDetails initialData={car}/>
      <Filteredlist list={person}/> */}
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
