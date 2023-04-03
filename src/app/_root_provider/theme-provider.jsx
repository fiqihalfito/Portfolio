"use client"

import { createContext, useContext, useState } from "react"
import Main from "../_main/Main"
import Footer from "../_root_components/Footer"

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <div className={theme}>
                <div className="dark:bg-slate-900 dark:text-white min-h-screen px-4">
                    <Main>
                        {children}
                    </Main>
                </div>
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}


export default ThemeProvider