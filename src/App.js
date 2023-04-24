import { Welcome } from './Props-Passing`name`prop';
import {Hello} from './esercizio1';
import { Welcome2 } from './Props-Defaultvalue';
import { WelcomeAge } from './Props-Secondprop';
function App() {
  return (
    <div>
      <Hello />
      <Welcome name={"Jimmy"}/>
      <Welcome2 />
      <WelcomeAge  name={"DADO"} age={22} />
    </div>
  );
}

export default App;
