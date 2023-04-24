import { Welcome } from './Props-Passing`name`prop';
import {Hello} from './esercizio1';
import { Welcome2 } from './Props-Defaultvalue';
function App() {
  return (
    <div>
      <Hello />
      <Welcome name={"Jimmy"}/>
      <Welcome2 />
    </div>
  );
}

export default App;
