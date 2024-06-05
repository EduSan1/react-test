import './index.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    const routes = [{
        label: 'Home',
        to: '/'
    },
    {
        label: 'Menu2',
        to: '/menu-2'
    }]

    return (
        <div className='side-bar'>
            {routes.map((route, index) => (
                <li key={index} className='side-bar-item'> 
                    <Link to={route.to}>
                        {route.label}
                    </Link>
                </li>
            ))}
        </div>
    )
}