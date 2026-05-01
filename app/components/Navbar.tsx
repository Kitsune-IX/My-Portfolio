import { link } from "fs"

const navLink = [
    {href: "#about", label: "About"},
    {href: "#experience", label: "Experience"},
    {href: "#skills", label: "Skills"},
    {href: "#works", label: "Works"},
    {href: "#contact", label: "Contact"},
]

export const Navbar = () => {
    return(
        <header className="flex top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a>KitsuneIX</a>
            </nav>

            <div>
                <div>
                    {navLink.map((link, index) => (
                        <a href={link.href} key={index}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}