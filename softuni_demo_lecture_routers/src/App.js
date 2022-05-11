import './App.css';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AboutPage from './components/AboutPage';
import ShopPage from './components/ShopPage';
import Header from './components/Header';
import ShopItem from './components/ShopItem';

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path='/' element={<WelcomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/shop/:itemID' element={<ShopItem />} />
                <Route path='/custom' element={<ShopPage />} render={() => {
                    <>
                        <h2>Here is the custom page</h2>
                        <p>Some paragraph here</p>
                    </>
                }} />
            </Routes>
        </div>
    );
}

export default App;
