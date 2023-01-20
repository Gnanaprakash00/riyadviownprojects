const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./usermodal')
const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017/2023').then(() => {
    console.log('db connected success');
})


app.post('/send', (req, res) => {
    try {
        let { username, email, subject, message } = req.body.value;
        User.create({ name: username, email: email, subject: subject, message: message })
        res.send({ success: 'success' })
        console.log('success');
    } catch {
        res.send({ error: 'error' })

    }
})


app.listen(5000, () => {
    console.log('server working', 5000);
})