import logo from './logo.svg';
import './App.css';
import ClickIncrease from './components/ClickIncrease';
import HoverIncrease from './components/HoverIncrease';
import UseEffectComp from './components/useEffectComp';

function App() {
  return (
    <div className="App">
      <ClickIncrease/>
      <HoverIncrease/>

      <UseEffectComp/>
    </div>
  );
}

export default App;
