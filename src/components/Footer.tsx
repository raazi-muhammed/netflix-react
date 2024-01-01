import { footerLinks } from "../constants/links";
import Container from "./Container";

const Footer = () => {
    return (
        <footer className="p-12 text-xs text-slate-500 space-y-8">
            <Container>
                <p>
                    Questions?
                    <span className="underline"> Call 000-800-919-1694 </span>
                </p>
                <section className="flex justify-between underline">
                    {footerLinks.map((linkSection) => (
                        <section className="flex flex-col gap-4">
                            {linkSection.map((link) => {
                                return <a href={link.link}>{link.title}</a>;
                            })}
                        </section>
                    ))}
                </section>
                <p>Netflix India</p>
            </Container>
        </footer>
    );
};

export default Footer;
