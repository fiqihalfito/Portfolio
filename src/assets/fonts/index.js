import { Poppins, Inter, Satisfy } from "next/font/google";

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400", "500", "700"],
    display: "swap",
    variable: "--font-poppins"
})

export const inter = Inter({
    subsets: ['latin'],
    weight: ["400", "500", "700"],
    display: "swap",
    variable: "--font-inter"
})

export const satisfy = Satisfy({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    variable: "--font-satisfy"
})