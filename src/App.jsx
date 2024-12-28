import {Link, NavLink, Route, Routes, useNavigate} from 'react-router-dom';
import Home from './pages/homePage/Homepage.jsx';
import NewPost from './pages/nieuw/NieuwePost.jsx';
import Overview from './pages/post/AllePost.jsx';
import PostDetail from './pages/postDetail/PostDetail.jsx';
import logoMedium from './assets/logo-medium.png'
import './App.css'
import NotFound from './pages/404/NotFound.jsx';

function App() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="main-navigation outer-content-container">
                <div className="inner-nav-container">
                    <button type="button" className="main-navigation-logo-button" onClick={() => navigate('/')}>
                        <img src={logoMedium} alt="Logo that links to home page"/>
                    </button>
                    <ul className="main-navigation-links">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to="/posts">Alle posts</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to="/new">Nieuwe post maken</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<NewPost />} />
                    <Route path="/posts" element={<Overview />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <footer className="footer-navigation outer-content-container">
                Blogventure &copy; 2023 - ontwikkeld voor NOVI Hogeschool
            </footer>
        </>
    )
}

export default App