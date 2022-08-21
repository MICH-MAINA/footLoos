import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import './App.css';

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                
            </Routes>
        </BrowserRouter>
    );
}
export default Main;