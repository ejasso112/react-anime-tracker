const express = require("express")
const passport = require("passport")
const passportStrategies = require("../config/passport-strategies")
const authRoutes = require("../config/auth-routes")
const checkRoutes = require("../config/check-routes")
const cookieSession = require("cookie-session")
const keys = require("../config/keys")
const cors = require("cors")

const app = express()

app.use(cookieSession({
    maxAge: 1000 * 60 * 60 * 24,
    keys: [keys.session.cookieKey]
}))

//Initialize passport
app.use(passport.initialize())
app.use(passport.session())

//Setup Routes
app.use("/auth", authRoutes)

app.get("/user", (req, res) => {
    console.log("getting user data!")
    console.log(req.user)
    
    req.user ? 
    res.send({user: req.user, isLoggedIn : true}) : 
    res.send({user: null, isLoggedIn : false})
})

app.listen(process.env.PORT || 5000, console.log("server is on"))