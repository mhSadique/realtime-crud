import './App.css';
import Title from './components/Title';
import UserInput from './components/UserInput';
import UsersCollection from './components/UsersCollection';

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: 'whitesmoke', minHeight: '100vh' }}
    >
      <Title />
      <UserInput />
      <UsersCollection />
    </div>
  );
}

export default App;
