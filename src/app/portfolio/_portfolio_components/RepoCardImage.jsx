"use client"

import Image from "next/image"
import { useState } from "react"

const RepoCardImage = ({ repoId }) => {

    const [imgError, setImgError] = useState(false)

    if (!imgError) {
        return (
            <Image
                src={`/images/repo/${repoId}.png`}
                alt="image here"
                fill
                onError={() => setImgError(true)}
                className="object-cover" />
        )
    } else {
        return (
            <Image
                src="/images/error/404image.png"
                alt="image here"
                fill
                className="object-cover" />
        )
    }
}

export default RepoCardImage