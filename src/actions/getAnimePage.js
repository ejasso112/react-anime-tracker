async function getAnimePage(params) {
    const query = `
        query ($page: Int, $perPage: Int, $status: MediaStatus, $season: MediaSeason, $seasonYear: Int, $type: MediaType, $sort: [MediaSort], $search: String) {
            Page(page: $page, perPage: $perPage) {
                media(status: $status, season: $season, seasonYear: $seasonYear, type: $type, sort: $sort, genre_not_in: "Hentai", search: $search) {
                    id
                    description
                    popularity
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
                    genres
                    season
                    seasonYear
                }
            }
        }
    `

    const variables = {
        page: params.page,
        perPage: params.perPage,
        status: params.status,
        season: params.season,
        seasonYear: params.seasonYear,
        type: params.type,
        sort: params.sort,
        search: params.search
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
    return(data)
}

export default getAnimePage
