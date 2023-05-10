import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./components/displayLanguage";
import { useState } from "react";

function App() {
  
  const [language, setLanguage] = useState('en')
  
  function handleChange(event){
    setLanguage(event.target.value)
  }
  
  return (
    <div>
      <select onChange={handleChange} value={language}>
        <option value='it'>ITALIANO</option>
        <option value='en'>INGLESE</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
