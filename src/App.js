import { Welcome } from './Props-Passing`name`prop';
import {Hello} from './esercizio1';
import { Welcome2 } from './ConditionalRendering-Ifpropispresent';
import { WelcomeAge } from './Props-Secondprop';

function App() {
  return (
    <div>
      <Hello />
      <Welcome name={<strong>Jimmy</strong>}/>
      <Welcome2 age={20}/>
      <WelcomeAge  name={"DADO"} age={22} />
    </div>
  );
}

export default App;
