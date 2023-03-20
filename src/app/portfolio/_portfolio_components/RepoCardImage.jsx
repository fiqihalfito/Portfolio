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
                sizes="70vw"
                // priority
                onError={() => setImgError(true)}
                className="object-cover" />
        )
    } else {
        return (
            <Image
                src="/images/error/404image.png"
                alt="image here"
                fill
                sizes="70vw"
                // priority
                className="object-cover" />
        )
    }
}

export default RepoCardImage