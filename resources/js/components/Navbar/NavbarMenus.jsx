// components/MobileMenu.jsx
import Menu from "./Menu";
import BtnLinkFooter from "../Buttons/BtnLinkFooter";

const NavbarMenus = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <div
            className={`fixed inset-0 z-40 flex flex-col justify-center bg-l-accent transition-transform duration-500 ease-in-out dark:bg-d-accent ${
                isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <nav className="">
                <ul className="space-y-8">
                    <Menu
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        url="/#blog"
                        title="Home"
                    />
                    {/* <Menu
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        url="/#blog"
                        title="Curriculum Vitae"
                    /> */}
                    <Menu
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        url="/#projects"
                        title="Projects"
                    />
                    <Menu
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        url="/#blog"
                        title="Writings"
                    />
                    <Menu
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        url="https://github.com/danarseptiyanto"
                        title="GitHub"
                    />
                    <Menu
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        url="https://www.instagram.com/dnrsept/"
                        title="Instagram"
                    />
                </ul>
            </nav>
        </div>
    );
};

export default NavbarMenus;
