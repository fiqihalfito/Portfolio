"use client"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

const PortfolioNav = () => {

    const segment = useSelectedLayoutSegment()

    return (
        <div className='flex justify-center space-x-8'>
            <Link
                href={'/portfolio'}
                className={`${segment === null && 'border-b-2'} border-black dark:border-white py-2 px-2 hover:border-b-2`}>
                All
            </Link>
            <Link
                href={'/portfolio/front-end'}
                className={`${segment === 'front-end' && 'border-b-2'} border-black dark:border-white py-2 px-2 hover:border-b-2`}>
                Front End
            </Link>
            <Link
                href={'/portfolio/back-end'}
                className={`${segment === 'back-end' && 'border-b-2'} border-black dark:border-white py-2 px-2 hover:border-b-2`}>
                Back End
            </Link>
            <Link
                href={'/portfolio/machine-learning'}
                className={`${segment === 'machine-learning' && 'border-b-2'} border-black dark:border-white py-2 px-2 hover:border-b-2`}>
                Machine Learning
            </Link>
        </div>
    )
}

export default PortfolioNav