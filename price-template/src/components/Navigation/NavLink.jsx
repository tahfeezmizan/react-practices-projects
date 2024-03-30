
const NavLink = ({routeLink}) => {
    return (
        <nav>
            
            <ul>
                <li className="hover:bg-slate-300">
                    <a href={routeLink.path}>{routeLink.name}</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavLink;