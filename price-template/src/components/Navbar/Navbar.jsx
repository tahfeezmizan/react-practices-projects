import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' }
    ];


    return (
        <nav className="flex justify-between items-center         ">
            <h1 className="text-4xl">React</h1>

            <ul className={`md:flex gap-5 duration-300 bg-red-200 md:bg-transparent p-3 absolute md:static  ${open ? 'top-12 md:top-0 right-1 md:right-0' : '-right-36 md:right-0 top-12'}`}>
                {
                    routes.map(route => <Link key={route.id} routeData={route}></Link>)
                }
            </ul>

            <div onClick={() => setOpen(!open)} className="md:hidden text-3xl">
                {
                    open === !true ? <RiMenu3Fill /> : <IoMdClose />
                }
            </div>
        </nav>
    );
};

export default Navbar;