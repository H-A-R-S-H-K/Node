const express = require('express');
const app = express();
app.use(express.json());


let courses = [
    {id : 1, name : "Java"},
    {id : 2, name : "C++"},
    {id : 3, name : "C#"}
]

app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const method = req.method;
    const hostname = req.hostname;
    const date = new Date().toISOString();

    console.log(`IP: ${ip}, Method: ${method}, Hostname: ${hostname}, Date: ${date}`);
    next();
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.post('/courses', (req, res) => {
    const newCourse = {id : courses.length + 1, ...req.body};
    courses.push(newCourse);
    res.status(400).send({message : "successfully posted new course"});
})

app.put('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseName = req.body;

    const courseIdx = courses.findIndex(course => course.id == courseId);
    if (courseIdx == -1)
        res.send({message : "Course not found"});
    else {
        courses[courseIdx] = {id : courseId, ...courseName };
        res.send({message : "Course updated succesfully"})
    }
})

app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseName = req.body;

    const courseIdx = courses.findIndex(course => course.id == courseId);
    if (courseIdx == -1)
        res.send({message : "Course not found"});
    else {
        courses.splice(courseIdx, 1);
        res.send({message : "Course deleted successfully"});
    }
})
app.listen(3000, () => {
    console.log("Listening on port 3000: ");
})