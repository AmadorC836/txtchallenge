import './App.css';
import Greeting from './Components/greeting'
import Logo from './Components/logo';
import Counter from './Components/counter';
function App() {
  const Username ="Tayhsaun"
  return (
    <div>
      <Greeting name = {Username}/>
      <Logo />
      <Counter />
    </div>
  );
}

export default App;
