async function getAnime(params) {
    const query = `
        query ($id: Int) {
            Media(id: $id) {
                id
                coverImage {
                    extraLarge
                    large
                    medium
                    color
                }
                title {
                    romaji
                    english
                    native
                    userPreferred
                }
                episodes
                startDate {
                    year
                    month
                    day
                }
                averageScore
                format
                description
            }
        }
    `

    const variables = {
        id: params.id
    }

    const url = "https://graphql.anilist.co",
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

    const response = await fetch(url, options)
    const data = await response.json()
    return (data)
}

export default getAnime
