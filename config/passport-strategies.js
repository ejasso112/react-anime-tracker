const passport = require("passport")
const AnilistStrategy = require("passport-anilist").Strategy
const keys = require("./keys")

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

//Anilist Strategy
passport.use(new AnilistStrategy({
    clientID: keys.ANILIST.clientId,
    clientSecret: keys.ANILIST.clientSecret,
    callbackURL: "/auth/anilist/callback"
}, (accessToken, refreshToken, profile, done) => {
    user = {...profile}
    console.log(user)
    return done(null, user)
}))