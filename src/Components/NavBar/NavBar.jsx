import { useState } from "react";
import Link from "../Link/Link";
import { BiAlignRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/product/:id', name: 'Product Detail', id: 'productDetail' },
        { path: '*', name: 'Not Found', id: 'notFound' },
    ];


    return (
        <nav>
            {/* this div will hidden in midium size display 
            and when i will click on this part - it will set the value of setOpen of opoosite of the previous value  */}
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    // if the open value is true then show the X sign and if the open value false show the manu icon
                    open === true ? <AiOutlineClose></AiOutlineClose> : <BiAlignRight ></BiAlignRight>
                }
                
            </div>
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }

            </ul>
        </nav>
    );
};

export default NavBar;