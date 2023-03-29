import NavBar from "../_root_components/NavBar"

export const metadata = {
    title: 'About',
    description: 'Portfolio by Fiqih Alfito',
}

export default function AboutLayout({ children }) {
    return (
        <div className="">
            <NavBar segment={'about'} />
            {children}
        </div>
    )
}