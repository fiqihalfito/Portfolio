import MenuIcon from "@/assets/icons/menu"
import MoonIcon from "@/assets/icons/moon"
import Link from "next/link"
import SidebarMobile from "./SidebarMobile"
import ToggleDarkMode from "./ToggleDarkMode"

const NavBar = ({ segment }) => {

    return (
        <div className="flex items-stretch justify-between w-full md:custom-container">
            <span className={`font-sofia text-4xl select-none mr-20 py-8`}>Portfolio</span>

            <div className="hidden md:flex items-stretch ">

                <div className="relative flex justify-center items-center w-32">
                    <Link
                        key={'home'}
                        href={'/'}
                        className={`hover:border-2 px-4 py-2 rounded-lg`}>
                        Home
                    </Link>
                    {segment === 'home' && <div className="border border-black dark:border-white w-full absolute bottom-0 " />}
                </div>

                <div className="relative flex justify-center items-center w-32">
                    <Link
                        key={'portfolio'}
                        href={'/portfolio'}
                        className={`hover:border-2 px-4 py-2 rounded-lg`}>
                        Portfolio
                    </Link>
                    {segment === 'portfolio' && <div className="border border-black dark:border-white w-full absolute bottom-0 " />}
                </div>

                <div className="relative flex justify-center items-center w-32">
                    <Link
                        key={'about'}
                        href={'/about'}
                        className={`hover:border-2 px-4 py-2 rounded-lg`}>
                        About
                    </Link>
                    {segment === 'about' && <div className="border border-black dark:border-white w-full absolute bottom-0 " />}
                </div>

                <div className="flex justify-center items-center w-32 ">
                    <ToggleDarkMode />
                </div>
            </div>

            {/* for mobile */}
            <SidebarMobile segment={segment} />

        </div>
    )
}

export default NavBar