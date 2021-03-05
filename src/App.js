import './App.css'
import Button from './components/UI/Button'
import Icon from './components/UI/Icon'
import NavComponent from './components/containers/Nav'

function App() {
  return (
    <div className="App">
      
      <Icon type="home" color="blue" size="20" />
      <NavComponent />
      <Button />
    
    </div>
  );
}

export default App;
