import { Link } from "react-router-dom";
import './Navigation.css';
function Navigation(){
    return (
        <div className="navbar">
            <h3><Link className= "navbar-title" to="/">Home</Link></h3>
            <ul className="navbar-links">
                <li ><Link className="nav-item" to="/education">Education</Link></li>
                <li ><Link className="nav-item" to="/experience">Experience</Link></li>
                <li ><Link className="nav-item" to="/achievements">Achievements</Link></li>
                <li ><Link className="nav-item" to="/projects">Projects</Link></li>
            </ul>
        </div>
    );
}


export default Navigation;