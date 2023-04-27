import { Welcome } from './Props-Passing`name`prop';
import {Hello} from './esercizio1';
import { Welcome2 } from './ConditionalRendering-IfisequaltoJohn';
import { WelcomeAge } from './Props-Secondprop';
import { Counter } from './CreateACounterClassComponent';

function App() {
  return (
    <div>
      <Hello />
      <Welcome name={<strong>Jimmy</strong>}/>
      <Welcome2 age={65}/>
      <WelcomeAge  name={"DADO"} age={22} />
      <Counter />
    </div>
  );
}

export default App;
