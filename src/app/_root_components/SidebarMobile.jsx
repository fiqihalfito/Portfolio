"use client"

import MenuIcon from "@/assets/icons/menu"
import Link from "next/link"
import { useState } from "react"
import ToggleDarkMode from "./ToggleDarkMode"

const SidebarMobile = ({ segment }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="md:hidden flex justify-center items-center gap-x-4">
                <ToggleDarkMode />
                <button onClick={() => setOpen(status => !status)}>
                    <MenuIcon />
                </button>
            </div>
            {open &&
                <div className="fixed z-50 top-0 left-0 h-screen bg-white dark:bg-slate-900 w-3/4 py-8 px-4 text-2xl flex flex-col md:hidden gap-y-4">
                    <p className="text-4xl font-bold px-8 mb-4">Menu</p>
                    <Link
                        href={'/'}
                        className="relative px-8 flex items-center">
                        {segment === 'home' && <div className="w-1 rounded-full h-full bg-cyan-500 absolute top-0 left-0" />}
                        Home
                    </Link>
                    <Link
                        href={'/portfolio'}
                        className="relative px-8 flex items-center">
                        {segment === 'portfolio' && <div className="w-1 rounded-full h-full bg-cyan-500 absolute top-0 left-0" />}
                        Portfolio
                    </Link>
                    <Link
                        href={'/about'}
                        className="relative px-8 flex items-center">
                        {segment === 'about' && <div className="w-1 rounded-full h-full bg-cyan-500 absolute top-0 left-0" />}
                        About
                    </Link>
                </div>
            }

        </>
    )
}

export default SidebarMobile