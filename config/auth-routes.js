const router = require("express").Router()
const passport = require("passport")

// Auth Logout
router.get("/logout", (req, res) => {
    req.logout()
    res.redirect("/")
})

// Auth with anilist
router.get("/anilist", passport.authenticate("anilist"))
// Callback Route for Anilist
router.get("/anilist/callback", passport.authenticate("anilist"), (req, res) => {
    res.redirect("/profile")
})

module.exports = router
