import NavBar from '@/app/_root_components/NavBar'
import './globals.css'
import { poppins, inter, satisfy } from '@/assets/fonts'


export const metadata = {
    title: 'Portfolio - Fiqih Alfito',
    description: 'Portfolio by Fiqih Alfito',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable} ${inter.variable} ${satisfy.variable}`}>
            <body className={`font-poppins bg-black text-white`}>
                {children}
            </body>
        </html>
    )
}
