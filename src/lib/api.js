
export const getSkill = async (skill) => {
    const response = await fetch('https://api.github.com/users/fiqihalfito/repos',
        {
            headers: {
                'Authorization': `BEARER ${process.env.GITHUB_TOKEN}`
            },
            // next: { revalidate: 0 },
            cache: 'no-store'
        })

    // console.log(response);

    let repos = await response.json()

    if (!skill) {
        // all repos
        repos = repos.filter(repo => repo.topics.length > 0)
    } else {
        // repos by topics/skill
        repos = repos.filter(repo => repo.topics.includes(skill))
    }

    const sortLatestRepos = repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    return sortLatestRepos
}