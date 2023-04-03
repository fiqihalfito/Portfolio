"use client"

import { useState } from "react"

export const repoWrapperSetting = () => {
    const [viewLayout, setViewLayout] = useState(3)
    return [viewLayout, setViewLayout]
}

