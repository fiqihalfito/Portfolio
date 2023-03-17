
export const getSkill = async (skill) => {
    const response = await fetch('https://api.github.com/users/fiqihalfito/repos',
        {
            next: { revalidate: 30 },
            // cache: 'reload'
        })

    const repos = await response.json()

    const filtered = repos.filter(repo => repo.topics.includes(skill))
    return filtered
}