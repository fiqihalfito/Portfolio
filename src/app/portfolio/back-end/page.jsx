import { getSkill } from "@/lib/api"
import RepoCard from "../_portfolio_components/RepoCard"
import RepoWrapper from "../_portfolio_components/RepoWrapper"


export const metadata = {
    title: 'Portfolio - Back End',
    description: 'Back End',
}

const BackEnd = async () => {

    const repos = await getSkill('back-end')

    return (
        <RepoWrapper>
            {repos.map(repo => (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </RepoWrapper>
    )
}

export default BackEnd