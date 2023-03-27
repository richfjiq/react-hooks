import { Counter, RedCounter, TimerParent, User } from './components';

const App = () => {
  return (
    <div>
      <h1>React + TypeScript</h1>
      <hr />
      <Counter />
      <User />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerParent />
      <br />
      <h2>useReducer</h2>
      <hr />
      <RedCounter />
    </div>
  );
};

export default App;
