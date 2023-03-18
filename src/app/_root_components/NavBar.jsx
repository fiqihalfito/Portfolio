"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { satisfy } from "@/assets/fonts"

const NavBar = () => {

    const segment = useSelectedLayoutSegment()

    return (
        <div className="flex items-center">
            <span className={`${satisfy.className} text-4xl select-none py-8 mr-20`}>Portfolio</span>
            <nav className="grid grid-flow-col font-bold">
                <Link
                    href={'/'}
                    className={`${segment === null && 'border-b-2'} py-8 flex justify-center w-32`}>
                    Home
                </Link>
                <Link
                    href={'/portfolio'}
                    className={`${segment === 'portfolio' && 'border-b-2'} py-8 flex justify-center w-32`}>
                    Portfolio
                </Link>
            </nav>
        </div>
    )
}

export default NavBar