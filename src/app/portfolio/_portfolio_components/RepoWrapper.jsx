"use client"

import { useContext, useState } from "react"
import { PortofolioSettingContext } from "../_settings"

// icons
import ColumnOne from "@/assets/icons/column-one"
import ColumnThree from "@/assets/icons/column-three"
import ColumnTwo from "@/assets/icons/column-two"

const RepoWrapper = ({ children }) => {

    const settings = useContext(PortofolioSettingContext)
    const [viewLayout, setViewLayout] = settings.repoWrapperSetting
    // const [viewLayout, setViewLayout] = useState(2)

    const mapGridCol = {
        1: 'md:grid-cols-1',
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
    }

    const gridCols = mapGridCol[viewLayout]

    return (
        <div>
            <div className="hidden md:flex my-4 divide-x-2">
                <button
                    key={1}
                    className={`p-1 rounded-l `}
                    onClick={() => setViewLayout(1)}>
                    <ColumnOne isActive={viewLayout === 1} />
                </button>
                <button
                    key={2}
                    className={`p-1 `}
                    onClick={() => setViewLayout(2)}>
                    <ColumnTwo isActive={viewLayout === 2} />
                </button>
                <button
                    key={3}
                    className={`p-1 rounded-r`}
                    onClick={() => setViewLayout(3)}>
                    <ColumnThree isActive={viewLayout === 3} />
                </button>
            </div>
            <div className={`grid grid-cols-1 ${gridCols} gap-4 md:gap-12 pb-12 mt-4 md:mt-0`}>
                {children}
            </div>
        </div>

    )
}

export default RepoWrapper