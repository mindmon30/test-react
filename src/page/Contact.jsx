import { Link } from "react-router-dom";
import './about.css'

function Contact() {
    return (
        <div>
            <h2>Contact Page</h2>
            <Link to="/about" className="red">Home</Link>
        </div>
    );
}

export default Contact;