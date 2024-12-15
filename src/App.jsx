import './App.css';
import React from 'react';
import HomePage from './pages/homepage/Homepage.jsx';
import allePost from './pages/post/allePost.jsx';
import NieuwePost from './pages/nieuw/NieuwePost.jsx';
import NotFound from './pages/404/NotFound.jsx';
import Navigation from './pages/navigation/Navigation.jsx';
import{ Route, Routes, useNavigate} from 'react-router-dom';
import logo from './assets/logo-white.png';

function App() {
    const navigate = useNavigate();

    function handlePostSubmit () {
        navigate('/allePost');
    }



    return (
        <div>

            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/allePost" element={<allePost/>}/>
                <Route path="/nieuwePost" element={<nieuwePost/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>



            <div className="page-container">
                <img src={logo} alt="Company logo"/>
                <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            </div>
        </div>

    );
}

export default App;
