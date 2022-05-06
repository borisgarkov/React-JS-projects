import './App.css';
import TodoListFunction from './components/TodoListFunctionExample';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>ToDo App</h1>
            </header>

            <main>
                <TodoListFunction />
            </main>

            <footer>
                <p>All rights reserved &copy;</p>
            </footer>
        </div>
    );
}

export default App;
