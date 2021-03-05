import './App.css'
import Button from './components/UI/Button'
import Icon from './components/UI/Icon'
import NavComponent from './components/containers/Nav'
import Avatar from "./components/UI/Avatar";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
      <Icon type="home" color="blue" size="20" />
      <Home/>
      
    
    </div>
  );
}

export default App;
