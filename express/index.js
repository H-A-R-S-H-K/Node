const express = require('express');
const app = express();

let courses = [
    {id : 1, name : "Java"},
    {id : 2, name : "C++"},
    {id : 3, name : "C#"}
]

app.get('/courses', (req, res) => {
    res.json(courses);
})

app.listen(3000, () => {
    console.log("Listening on port 3000: ");
})