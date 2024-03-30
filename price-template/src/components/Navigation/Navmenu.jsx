import { useState } from "react";
import NavLink from "./NavLink";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navmenu = () => {
    const [open, setOpen] = useState(true)

    const routes = [
        { id: 1, path: '/', name: 'Home 1' },
        { id: 2, path: '/about', name: 'About 1' },
        { id: 3, path: '/services', name: 'Services 1' },
        { id: 4, path: '/contact', name: 'Contact 1' }
    ];

    return (
        <div className="flex justify-between items-center">
            <h1 className="text-4xl">Logo</h1>
            <div className={`md:flex gap-8 bg-gray-200 md:bg-white duration-200 absolute md:static ${open ? '-top-36 right-0' : 'top-24 right-0'}`}>
                {
                    routes.map(route => <NavLink key={route.id} routeLink={route}></NavLink>)
                }
            </div>

            <div className="text-4xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === !true ? <IoCloseCircleOutline /> : <IoMenu />
                }

            </div>
        </div >
    );
};

export default Navmenu;