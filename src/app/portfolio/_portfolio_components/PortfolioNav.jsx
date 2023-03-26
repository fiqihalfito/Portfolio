"use client"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

const PortfolioNav = () => {

    const segment = useSelectedLayoutSegment()

    return (
        <div className='flex justify-start md:justify-center gap-x-8 overflow-x-auto '>
            <Link
                href={'/portfolio'}
                className={`${segment === null && 'border-b-2'} border-black dark:border-white p-2 hover:border-b-2 whitespace-nowrap  `}>
                All
            </Link>
            <Link
                href={'/portfolio/front-end'}
                className={`${segment === 'front-end' && 'border-b-2'} border-black dark:border-white p-2 hover:border-b-2 whitespace-nowrap `}>
                Front End
            </Link>
            <Link
                href={'/portfolio/back-end'}
                className={`${segment === 'back-end' && 'border-b-2'} border-black dark:border-white p-2 hover:border-b-2 whitespace-nowrap `}>
                Back End
            </Link>
            <Link
                href={'/portfolio/machine-learning'}
                className={`${segment === 'machine-learning' && 'border-b-2'} border-black dark:border-white p-2 hover:border-b-2 whitespace-nowrap `}>
                Machine Learning
            </Link>
        </div>
    )
}

export default PortfolioNav