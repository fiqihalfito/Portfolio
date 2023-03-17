import { getSkill } from "@/lib/api"
import RepoCard from "./_portfolio_components/RepoCard"
import RepoWrapper from "./_portfolio_components/RepoWrapper"


const Portfolio = async () => {

    const repos = await getSkill()

    return (
        <RepoWrapper>
            {repos.map(repo => (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </RepoWrapper>
    )
}

export default Portfolio