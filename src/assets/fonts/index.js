import { Poppins, Inter, Satisfy } from "next/font/google";

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400", "500", "700"],
    display: "swap"
})

export const inter = Inter({
    subsets: ['latin'],
    weight: ["400", "500", "700"]
})

export const satisfy = Satisfy({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap"
})