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
import Login2 from './resetLogIn';
import UncontrolledLogin from './UncontrolledLogin'
import TodoList from './TodoListComponent';
import AddTodo from './AddTodo';
import AddTodo2 from './ResetToDo';
import RemoveTodo from './removeToDo';
import RemoveTodo2 from './ToDoRenderProps';
import { CounterFunc } from './counterFunction';
import  { CounterFunc2 } from './sideEffectCounter';

function App() {
  return (
    <div>
      {/* <Hello />
      <Welcome2 age={65}/>
      <WelcomeAge  name={"DADO"} age={22} />
      <Counter />
      <Counter2 initialValue={2} incrementBy={2}/>
      <Counter3 />
      <ClickCounter/>
      <ClickTracker/>
      <InteractiveWelcome/>
      <Login/>
      <Login2/> 
      <UncontrolledLogin/>
      <TodoList/> */}
      <CounterFunc2/>
      <RemoveTodo2/>
      

    </div>
  );
}

export default App;
