"use client"

import ColumnOne from "@/assets/icons/column-one"
import ColumnThree from "@/assets/icons/column-three"
import ColumnTwo from "@/assets/icons/column-two"
import { useState } from "react"

const RepoWrapper = ({ children }) => {

    const [viewCols, setViewCols] = useState(2)

    const gridCols = "grid-cols-" + viewCols

    return (
        <div>
            <div className="flex my-4 divide-x-2">
                <button
                    key={1}
                    className={`p-1 rounded-l `}
                    onClick={() => setViewCols(1)}>
                    <ColumnOne isActive={viewCols === 1} />
                </button>
                <button
                    key={2}
                    className={`p-1 `}
                    onClick={() => setViewCols(2)}>
                    <ColumnTwo isActive={viewCols === 2} />
                </button>
                <button
                    key={3}
                    className={`p-1 rounded-r`}
                    onClick={() => setViewCols(3)}>
                    <ColumnThree isActive={viewCols === 3} />
                </button>
            </div>
            <div className={`grid ${gridCols} gap-12 mb-12`}>
                {children}
            </div>
        </div>

    )
}

export default RepoWrapper