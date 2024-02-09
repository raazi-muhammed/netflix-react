import NetflixLogo from "../assets/netflix";
import { links } from "../constants/links";
import Container from "./Container";

const NavBar = () => {
    return (
        <div className="flex justify-center">
            <div className="bg-gradient-to-b from-black opacity-75 left-0 right-0 w-screen h-20 fixed z-10 pointer-events-none"></div>
            <Container>
                <nav className="p-4 bg-opacity-30 fixed top-0  flex text-white gap-5 bg-gradient-to-r z-20 align-middle">
                    <div className="w-28 me-4">
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
            </Container>
        </div>
    );
};

export default NavBar;
