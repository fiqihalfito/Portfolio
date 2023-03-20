"use client"

import { createContext } from "react"
import { repoWrapperSetting } from "./RepoWrapperSetting"

export const PortofolioSettingContext = createContext()

export function PortfolioSettingProvider({ children }) {

    const settings = {
        repoWrapperSetting: repoWrapperSetting()
    }

    return (
        <PortofolioSettingContext.Provider value={settings}>
            {children}
        </PortofolioSettingContext.Provider>
    )
}