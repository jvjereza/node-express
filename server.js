const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

/****/
app.set("view engine", path.join(__dirname, "views"));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/Home.html'));
});
router.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/AboutUs.html'));
});

router.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname + '/ContactUs.html'));
});

// adding the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running port 3000');