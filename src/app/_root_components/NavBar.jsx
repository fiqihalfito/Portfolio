"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

const NavBar = ({ segment }) => {

    // const segment = useSelectedLayoutSegment()
    // console.log(segment);

    return (
        <div className="flex items-center w-full">
            <span className={`font-satisfy text-4xl select-none py-8 mr-20`}>Portfolio</span>
            <nav className="grid grid-flow-col font-bold">
                <Link
                    href={'/'}
                    className={`${segment === 'home' && 'border-b-2'} py-8 flex justify-center w-32`}>
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