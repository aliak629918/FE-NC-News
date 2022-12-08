import {Link, resolvePath, useMatch, useResolvedPath} from "react-router-dom"

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

//   function CustomLink({to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({path: resolvedPath.pathname, end: true})
//     return (
//         <li className={isActive === to ? "active" : ""}>
//             <Link to={to} {...props}>{children}
//             </Link>
//         </li>
//     )
//   }
export default NavBar