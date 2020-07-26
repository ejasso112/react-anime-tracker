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
                format
                episodes
                status
                startDate {
                    year
                    month
                    day
                }            
                endDate {
                    year
                    month
                    day
                }
                studios {
                    edges {
                        isMain
                        node {
                            id
                            name
                        }
                    }
                }
                rankings {
                    rank
                    allTime
                    type
                }

                relations {
                    edges {
                      node {
                        id
                        startDate {
                          year
                          month
                          day
                        }
                        episodes
                        format
                        averageScore
                        title {
                          romaji
                          english
                          native
                          userPreferred
                        }
                        coverImage {
                          extraLarge
                          large
                          medium
                          color
                        }
                      }
                    }
                  }

                season
                seasonYear
                source
                genres
                synonyms
                averageScore
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
