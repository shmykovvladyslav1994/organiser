import { Link, NavLink } from "react-router-dom"
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/tasks">Tasks</NavLink>
            </nav>
        </header>
    )
}

export default Header