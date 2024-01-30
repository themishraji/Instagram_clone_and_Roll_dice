const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/rolldice", (req, res) => {
    let diceval = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceval });
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");

    // Check if the username exists in instaData
    if (instaData.hasOwnProperty(username)) {
        const data = instaData[username];
        console.log(data);
        res.render("instagram.ejs", { data });
    } else {
        // Handle the case where username is not found
        res.render("error.ejs");
    }
});


//     // Check if the username exists in instaData
//     if (instaData.hasOwnProperty(username)) {
//         const data = instaData[username];
//         console.log(data);
//         res.render("instagram.ejs", { data, followers: data.followers });
//     } else {
//         // Handle the case where username is not found
//         res.status(404).send("User not found");
//     }
// });


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
