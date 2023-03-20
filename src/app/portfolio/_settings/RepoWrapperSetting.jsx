"use client"

import { useState } from "react"

export const repoWrapperSetting = () => {
    const [viewLayout, setViewLayout] = useState(2)
    return [viewLayout, setViewLayout]
}

