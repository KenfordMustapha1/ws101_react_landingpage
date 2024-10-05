import './navbar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <div className="header">
                <div className="logo">KENXX</div>
                    <div className="nav">
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/About'>About</CustomLink>
                    </div>
            </div>
        </div>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedpath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedpath.pathname, end: true});
    return (
        <li className={isActive ? "active" : "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Navbar;