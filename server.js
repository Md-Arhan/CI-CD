import express from 'express';
import { sum } from './sum.js';

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log("server is listening");
});


app.get("/home", (req, res) => {
    res.send({
        msg : "Working"
    })
})

app.get("/sum/:a/:b",  (req, res) => {
    const {a, b} = req.params;

    res.json({
        ans : sum(parseInt(a), parseInt(b))
    })
});