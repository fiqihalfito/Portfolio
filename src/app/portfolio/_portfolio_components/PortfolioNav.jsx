"use client"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

const PortfolioNav = () => {

    const segment = useSelectedLayoutSegment()

    return (
        <div className='flex justify-center space-x-8 mb-4'>
            <Link
                href={'/portfolio/front-end'}
                className={`${segment === 'front-end' && 'border-b-2'} py-2 px-2`}>
                Front End
            </Link>
            <Link
                href={'/portfolio/back-end'}
                className={`${segment === 'back-end' && 'border-b-2'} py-2 px-2`}>
                Back End
            </Link>
        </div>
    )
}

export default PortfolioNav