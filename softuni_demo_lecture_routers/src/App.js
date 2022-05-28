import './App.css';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AboutPage from './components/AboutPage';
import ShopPage from './components/ShopPage';
import Header from './components/Header';
import ShopItem from './components/ShopItem';
import MyForm from './components/MyForm';
import MyContext from './contexts/MyContext';
import SecondContext from './contexts/SecondContext';


function App() {
    let name = 'Boris Garkov';
    let address = '137 Ovche Pole st.';
    let nameSecondContext = 'My Name from Second Context';

    return (
        <SecondContext.Provider value={nameSecondContext}>
            <MyContext.Provider value={{ name, address, test: 'test' }}>
                <div className="App">
                    <Header />

                    <Routes>
                        <Route path='/welcome/*' element={<WelcomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/shop' element={<ShopPage />} />
                        <Route path='/shop/:itemID' element={<ShopItem />} />
                        <Route path='/custom' element={<ShopPage />} />
                        <Route path='/form' element={<MyForm />} />
                        <Route path='*' element={<p>Page Not Found</p>} />
                    </Routes>
                </div>
            </MyContext.Provider>
        </SecondContext.Provider>
    );
}

export default App;
