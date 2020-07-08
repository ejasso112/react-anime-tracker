async function getAnimePage(params) {
    const query = `
        query ($page: Int, $perPage: Int, $season: MediaSeason, $seasonYear: Int, $type: MediaType, $sort: [MediaSort]) {
            Page(page: $page, perPage: $perPage) {
                media(season: $season, seasonYear: $seasonYear, type: $type, sort: $sort, genre_not_in: "Hentai") {
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
        season: params.season,
        seasonYear: params.seasonYear,
        type: params.type,
        sort: params.sort
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
