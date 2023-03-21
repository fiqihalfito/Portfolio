import { getSkill } from "@/lib/api"
import RepoCard from "../_portfolio_components/RepoCard"
import RepoWrapper from "../_portfolio_components/RepoWrapper"

export const metadata = {
    title: 'Portfolio - Machine Learning',
    description: 'Machine Learning',
}

const MachineLearning = async () => {

    const repos = await getSkill('machine-learning')


    return (
        <RepoWrapper>
            {repos.map(repo => (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </RepoWrapper>
    )
}


export default MachineLearning