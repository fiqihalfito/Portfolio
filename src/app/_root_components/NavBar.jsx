
import Link from "next/link"

const NavBar = ({ segment }) => {

    return (
        <div className="flex items-center justify-between w-full custom-container">
            <span className={`font-satisfy text-4xl select-none py-8 mr-20`}>Portfolio</span>
            <nav className="grid grid-flow-col font-bold">
                <Link
                    href={'/'}
                    className={`${segment === 'home' ? 'border-b-2' : ''} border-black dark:border-white py-8 flex justify-center w-32`}>
                    Home
                </Link>
                <Link
                    href={'/portfolio'}
                    className={`${segment === 'portfolio' ? 'border-b-2' : ''} border-black dark:border-white py-8 flex justify-center w-32`}>
                    Portfolio
                </Link>
                <Link
                    href={'/'}
                    className={`${segment === 'about' ? 'border-b-2' : ''} border-black dark:border-white py-8 flex justify-center w-32`}>
                    About
                </Link>
            </nav>
        </div>
    )
}

export default NavBar