import {Link} from "react-router-dom"

function NavBar() {
    return (
      <nav className="nav">
        <Link to="/" className="Title">
            Home
        </Link>
        <Link className="Title"to="/Users">
                Users
        </Link> 
        <Link className="Title"to="/Topics">
                Topics
        </Link> 
            
        
      </nav>
    );
  };

export default NavBar;