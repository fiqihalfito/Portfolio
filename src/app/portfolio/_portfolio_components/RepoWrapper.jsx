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
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
    }

    const gridCols = mapGridCol[viewLayout]

    return (
        <div>
            <div className="flex my-4 divide-x-2">
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
            <div className={`grid ${gridCols} gap-12 pb-12`}>
                {children}
            </div>
        </div>

    )
}

export default RepoWrapper