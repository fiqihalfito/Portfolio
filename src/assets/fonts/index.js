import { Poppins, Inter, Satisfy, Berkshire_Swash, Sofia } from "next/font/google";

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

export const berkshire_swash = Berkshire_Swash({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-berkshire-swash"
})

export const sofia = Sofia({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-sofia"
})

