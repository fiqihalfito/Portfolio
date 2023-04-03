import { getSkill } from "@/lib/api"
import RepoCard from "../_portfolio_components/RepoCard"
import RepoWrapper from "../_portfolio_components/RepoWrapper"

export const metadata = {
    title: 'Portfolio - Pinned',
    description: 'Pinned',
}

const Pinned = async () => {

    const repos = await getSkill('pinned')

    return (
        <RepoWrapper>
            {repos.map(repo => (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </RepoWrapper>
    )
}


export default Pinned