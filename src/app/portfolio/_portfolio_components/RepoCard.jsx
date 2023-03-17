
import moment from "moment/moment"
import Image from "next/image"
import Link from "next/link"


const RepoCard = ({ repo }) => {

    const repoTitle = (repo.name)
        .split("-")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    // const repoTitle = repo.name
    const repoCreatedDate = moment(repo.created_at).format("MMM D, YYYY")
    const isFrontEnd = repo.topics.includes("front-end")

    return (
        <div className="group/card rounded-lg overflow-hidden">
            <div className="h-52 bg-neutral-800 relative">
                <Image src={`/repo/${repo.id}.png`} fill className="object-cover" />
                <div className=" absolute bg-black bg-opacity-70 w-full h-full group-hover/card:flex hidden justify-center items-center space-x-4 ">
                    <Link
                        href={repo.html_url}
                        className="px-6 py-2 font-bold text-sm bg-amber-500 rounded-full hover:bg-amber-600 active:bg-amber-800">
                        View repo
                    </Link>
                    {isFrontEnd && <Link
                        href={repo.homepage}
                        className="px-6 py-2 font-bold text-sm bg-cyan-500 rounded-full hover:bg-cyan-600 active:bg-cyan-800">
                        Live demo
                    </Link>}

                </div>
            </div>
            <div className="bg-neutral-900 p-10 h-full">
                <p className="font-bold mb-2">{repoTitle}</p>
                <p className="text-xs">Created at {repoCreatedDate}</p>
            </div>
        </div>
    )
}

export default RepoCard