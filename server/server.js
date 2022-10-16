const express = require("express");

const app = express();
const port = 5000

app.get("/", (req, res) => {
    res.send("Running express server at port: " + port);
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}📡`)
})