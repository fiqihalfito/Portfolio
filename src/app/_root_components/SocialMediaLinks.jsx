import GithubIcon from "@/assets/icons/github"
import InstagramIcon from "@/assets/icons/instagram"
import LinkedinIcon from "@/assets/icons/linkedin"
import Link from "next/link"

const SocialMediaLinks = () => {
    return (
        <div className='flex items-center mt-4 space-x-8'>
            <Link
                href={'https://www.instagram.com/fiqihalfito'}
                target="_blank"
                className="hover:scale-110 active:scale-90 transition-all">
                <InstagramIcon />
            </Link>
            <Link
                href={'https://www.linkedin.com/in/fiqih-alfito'}
                target="_blank"
                className="hover:scale-110 active:scale-90 transition-all">
                <LinkedinIcon />
            </Link>
            <Link
                href={'https://github.com/fiqihalfito'}
                target="_blank"
                className="hover:scale-110 active:scale-90 transition-all">
                <GithubIcon />
            </Link>
        </div>
    )
}

export default SocialMediaLinks