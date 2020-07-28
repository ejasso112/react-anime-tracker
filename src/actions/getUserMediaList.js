const geUserMediaList = async userID => {
    const query = `
        query ($userId: Int) {
            ANIME:
            MediaListCollection(userId: $userId, type: ANIME) {
                lists {
                    name
                    entries {
                        id
                        progress
                        score
                        media {
                            id
                            format
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
            },
            MANGA:
            MediaListCollection(userId: $userId, type: MANGA) {
                lists {
                    name
                }
            }
        }
    `

    const variables = {
        userId: userID
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
    }

    
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return(data.data)
    } 
    catch (error) {
        console.log(error)
    }
}

export default geUserMediaList