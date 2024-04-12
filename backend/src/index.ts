import express from "express";
import Users from "./data/users";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());



app.get('/api', (req, res) => {
    res.send("<h1> API </h1>");
})

app.get('/api/users', (req, res) => {
    res.status(200).send(Users);
})




app.listen(PORT, ()=> { console.log(`listening at ${PORT}`) });