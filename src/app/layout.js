import './globals.css'
import { poppins, inter, satisfy, sofia, berkshire_swash, rancho } from '@/assets/fonts'
import ThemeProvider from './_root_provider/theme-provider'


export const metadata = {
    title: 'Portfolio - Fiqih Alfito',
    description: 'Portfolio by Fiqih Alfito',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable} ${inter.variable} ${satisfy.variable} ${sofia.variable} ${berkshire_swash.variable} ${rancho.variable} `}>
            <body className={`font-poppins `}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
