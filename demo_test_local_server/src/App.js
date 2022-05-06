import './App.css';
import UserInput from './components/UserInput';
import ShowAPIData from './components/ShowAPIData';

function App() {
    return (
        <div className="App">
            <header>My Title</header>

            <UserInput />
            <ShowAPIData />
        </div>
    );
}

export default App;
