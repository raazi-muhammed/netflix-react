import NetflixLogo from "../assets/netflix";
import { links } from "../constants/links";

const NavBar = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-black opacity-75 w-screen h-20 fixed z-10 pointer-events-none"></div>
            <nav className="p-4 bg-opacity-30 fixed top-0 w-full flex text-white gap-5 bg-gradient-to-r z-20 align-middle">
                <div className="w-28 mx-4">
                    <NetflixLogo />
                </div>
                {links.map((link, i) => (
                    <a
                        key={i}
                        className={`${
                            i === 0 ? "" : "opacity-50"
                        } mt-1 font-medium`}
                        href={link.link}
                    >
                        {link.title}
                    </a>
                ))}
            </nav>
        </>
    );
};

export default NavBar;
