import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home'
import Menu2 from './pages/menu2'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu-2" element={<Menu2 />} />
            </Routes>
        </Router>
    )
}