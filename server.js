const express = require("express");
const path = require("path");
const port = 4200;
const app = express();

const compression = require("compression");
// const express = require('express')
// const app = express()
app.use(compression());

// app.use(express.static('../prev_frontend/dist/materialpro'))
// simform-projects/ENFrontEnd-master/GIT/ENFrontEnd/tickets-advantage/dist
// app.use(express.static('../ENFrontEnd-master/tickets-advantage/dist/tickets-advantage',
// /home/abhishekkaria/Desktop/simform-projects/ENFrontEnd-master/GIT-NEW/ENFrontEnd/tickets-advantage
app.use(
  express.static(
    "./dist/materialpro/",
    // {
    //     maxAge: 31536000
    // }
    {
      // etag: true, // Just being explicit about the default.
      // lastModified: false,  // Just being explicit about the default.
      // maxAge: 31536000,
      setHeaders: (res, path) => {
        // if (path.endsWith('.html')) {
        // All of the project's HTML files end in .html
        res.setHeader("Cache-Control", "max-age=31536000");
        // }
      },
    }
  )
);

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
