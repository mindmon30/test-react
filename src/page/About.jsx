import { Link } from "react-router-dom";
import './about.css'

function About() {
    return (
        <div>        
            <h2>About Page</h2>
            <Link to="/contact" className="text-gray-600 border border-white bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Home</Link>
        </div>
    );
}

export default About;