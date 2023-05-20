import { Link, Route, Routes } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import CarDetails from "./components/CarDetails";
import GithubUser from "./components/CustomHook/GitHubUser";
import Filteredlist from "./components/FiltredList";
import DisplayLanguage from "./components/displayLanguage";
import { useState } from "react";
import Counter from "./Counter";
import ShowGithubUser from "./components/CustomHook/ShowGithubUser";
import { Hello } from "./components/esercizio1";
import Login from "./components/login";
import NotFound from "./components/NotFound";
import RouteGithubUserList from "./components/GithubUserListRoute";

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
        <Route path="/" element={<Hello/>} />
        <Route path="counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="/ShowGithubUser" element={<ShowGithubUser />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<RouteGithubUserList/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <p><Link to="/counter">GO TO COUNTER</Link></p>
      <p><Link to="/login"> LOGIN</Link></p>
      <p><Link to="/ShowGithubUser"> Github</Link></p>
      <p><Link to="/user">Add a user and select it</Link></p>
      
    </div>
  );
}

export default App;
