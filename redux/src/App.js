import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
function App() {
  return (
    <div className='App'>
      <Profile></Profile>
      <hr className={{color:'#123456'}} />
      <Login></Login>
    </div>
  );
}

export default App;
