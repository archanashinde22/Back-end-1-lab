const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
// create first end-Point and Method to le sending a friends array back to the client 
app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  }); 

//add another endpoint and method that will tell us how the weather is today

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });


const SERVER_PORT = 4000;
app.listen(SERVER_PORT,()=>console.log(`server running on ${SERVER_PORT}`));