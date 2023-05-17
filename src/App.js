import { LanguageContext } from "./LanguageContext";
import CarDetails from "./components/CarDetails";
import GithubUser from "./components/CustomHook/GitHubUser";
import DisplayLanguage from "./components/displayLanguage";
import { useState } from "react";

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
  return (
    <div>
      <GithubUser username='DavideCatanzaro'/>
      <CarDetails initialData={car}/>
    </div>
  );
}

export default App;
