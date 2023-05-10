import './App.css';
import {Link} from "react-router-dom";
const linkStyle = {
    textDecoration: "none"
};
export const Menus = () => {
    return (
        <ul className="menu">
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to = "/add" style={linkStyle}>Add Task</Link></li>
            <li><Link to = "/completed" style={linkStyle}>Completed Tasks</Link></li>
            <li><Link to = "/contact" style={linkStyle}>Contact Us</Link></li>
        </ul>
    );
}