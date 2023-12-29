type Props = {};
import NetflixLogo from "../assets/netflix";
import { links } from "../constants/links";

const NavBar = (props: Props) => {
    return (
        <nav className="p-4 bg-opacity-30 backdrop-blur-sm fixed top-0 w-full flex text-white gap-5 bg-gradient-to-r z-20 align-middle">
            <div className="w-28 mx-4">
                <NetflixLogo />
            </div>
            {links.map((link) => (
                <a className="opacity-50 mt-1" href={link.link}>
                    {link.title}
                </a>
            ))}
        </nav>
    );
};

export default NavBar;
