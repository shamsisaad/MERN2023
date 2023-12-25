const express = require("express");
const router = express.Router();
// const {home, register} = require("../controllers/auth-controller");
const authcontrollers = require("../controllers/auth-controller");

// first method for routing
// router.get('/', (req, res) => {
//     res.status(200).send('Welcome to Home Page using router');
// });

// 2nd method for routing
// router.route("/").get((req, res) => {
//     res.status(200).send('Welcome to HOMe Page using router');
// });

router.route("/").get(authcontrollers.home);

router.route("/register").get(authcontrollers.register);

module.exports = router;
