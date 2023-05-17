import { LanguageContext } from "./LanguageContext";
import GithubUser from "./components/CustomHook/GitHubUser";
import DisplayLanguage from "./components/displayLanguage";
import { useState } from "react";

function App() {
  
  const [language, setLanguage] = useState('en')
  
  function handleChange(event){
    setLanguage(event.target.value)
  }
  
  return (
    <div>
      <GithubUser username='DavideCatanzaro'/>
    </div>
  );
}

export default App;
