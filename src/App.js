import { Welcome } from './Props-Passing`name`prop';
import {Hello} from './esercizio1';
import { Welcome2 } from './ConditionalRendering-IfisequaltoJohn';
import { WelcomeAge } from './Props-Secondprop';
import { Counter } from './CreateACounterClassComponent';
import { Counter2 } from './CounterProps';
import { Counter3 } from './CounterWithComponentDidMount';
import ClickCounter from './Events-ClickCounter';
import ClickTracker from './Events-ClickTracker';
import InteractiveWelcome from './InteractiveWelcomeComponent';
import Login from './login';

function App() {
  return (
    <div>
      <Hello />
      <Welcome2 age={65}/>
      <WelcomeAge  name={"DADO"} age={22} />
      <Counter />
      <Counter2 initialValue={2} incrementBy={2}/>
      <Counter3 />
      <ClickCounter/>
      <ClickTracker/>
      <InteractiveWelcome/>
      <Login/>
    </div>
  );
}

export default App;
