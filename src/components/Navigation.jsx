import { NavLink } from 'react-router-dom'
import '../assets/css/navigation.css'

export default function Navigation() {
    return (
        <div className='navigation'>
            <ul className='main-nav'>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/about">About</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/blog">Blog</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/service">Service</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/project">Project</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}
