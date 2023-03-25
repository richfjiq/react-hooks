import { Counter, TimerParent, User } from './components';

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
    </div>
  );
};

export default App;
