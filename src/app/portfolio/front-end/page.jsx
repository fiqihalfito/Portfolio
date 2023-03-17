import { getSkill } from "@/lib/api"
import RepoCard from "../_portfolio_components/RepoCard"
import RepoWrapper from "../_portfolio_components/RepoWrapper"


const FrontEnd = async () => {

    const repos = await getSkill('front-end')


    return (
        <RepoWrapper>
            {repos.map(repo => (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </RepoWrapper>
    )
}


export default FrontEnd