"use client"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

const PortfolioNav = () => {

    const segment = useSelectedLayoutSegment()

    const focusSelected = (e) => {
        e.target.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" })
    }

    return (
        <div className='flex justify-start md:justify-center gap-x-8 overflow-x-auto snap-mandatory snap-x '>
            <Link
                href={'/portfolio/pinned'}
                onFocus={focusSelected}
                className={`${segment === 'pinned' && 'border-b-2'} border-black dark:border-white p-2 hover:border-b-2 whitespace-nowrap  snap-start`}>
                Pinned
            </Link>
            <Link
                href={'/portfolio'}
                onFocus={focusSelected}
                className={`${segment === null && 'border-b-2'} border-black dark:border-white p-2 hover:border-b-2 whitespace-nowrap  snap-start`}>
                All
            </Link>
            <Link
                href={'/portfolio/front-end'}
                onFocus={focusSelected}
                className={`${segment === 'front-end' && 'border-b-2'} border-black dark:border-white p-2 hover:border-b-2 whitespace-nowrap snap-start`}>
                Front End
            </Link>
            <Link
                href={'/portfolio/back-end'}
                onFocus={focusSelected}
                className={`${segment === 'back-end' && 'border-b-2'} border-black dark:border-white p-2 hover:border-b-2 whitespace-nowrap snap-center`}>
                Back End
            </Link>
            <Link
                href={'/portfolio/machine-learning'}
                onFocus={focusSelected}
                className={`${segment === 'machine-learning' && 'border-b-2'} border-black dark:border-white p-2 hover:border-b-2 whitespace-nowrap snap-end`}>
                Machine Learning
            </Link>
        </div>
    )
}

export default PortfolioNav