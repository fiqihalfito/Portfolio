
import moment from "moment/moment"
import Link from "next/link"
import RepoCardImage from "./RepoCardImage"


const RepoCard = ({ repo }) => {

    // const repoTitle = (repo.name)
    //     .split("-")
    //     .map(word => word[0].toUpperCase() + word.slice(1))
    //     .join(" ")
    const repoTitle = repo.name
    const repoCreatedDate = moment(repo.created_at).format("MMM D, YYYY")
    const repoTimeAgo = moment(repo.created_at).fromNow()
    const isFrontEnd = repo.topics.includes("front-end")

    return (
        <div className="group/card rounded-lg overflow-hidden flex flex-col border-2 dark:border-0">
            <div className="h-52 dark:bg-neutral-800 relative">

                <RepoCardImage repoId={repo.id} />

                <div className=" absolute bg-black bg-opacity-70 w-full h-full group-hover/card:flex hidden justify-center items-center space-x-4 ">
                    <Link
                        href={repo.html_url}
                        target='_blank'
                        className="px-6 py-2 font-bold text-sm text-white bg-amber-500 rounded-full hover:bg-amber-600 active:bg-amber-800">
                        View repo
                    </Link>
                    {isFrontEnd && <Link
                        href={repo.homepage}
                        target='_blank'
                        className="px-6 py-2 font-bold text-sm text-white bg-cyan-500 rounded-full hover:bg-cyan-600 active:bg-cyan-800">
                        Live demo
                    </Link>}

                </div>
            </div>
            <div className="dark:bg-neutral-900 p-4 flex-grow flex flex-col ">
                <p className="font-bold text-lg mb-3 " title={repoTitle}>{repoTitle}</p>
                <div className="flex flex-wrap gap-2 mb-2 -ml-1 ">
                    {repo.topics.map((topic, i) => (
                        <span key={i} className="border border-cyan-400 text-cyan-500 dark:text-cyan-100 rounded-full px-2 py-0.5 text-xs font-medium">{topic}</span>
                    ))}
                </div>
                <div className="flex justify-between items-end flex-grow">
                    <p className="text-xs text-neutral-400">Created {repoTimeAgo}</p>
                    <p className="text-xs text-neutral-400">{repoCreatedDate}</p>
                </div>
            </div>
        </div>
    )
}

export default RepoCard