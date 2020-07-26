const router = require("express").Router()

const authCheck = (req, res, next) => {
    if(!req.user) {
        // if user is not logged in
        console.log("must login")
        res.redirect("/login")
    } else {
        // if logged in
        console.log("is loggedin")
        next()
    }
}

router.get("/profile", authCheck, (req, res) => {
    res.redirect("/profile", {user: req.user})
})

module.exports = router
