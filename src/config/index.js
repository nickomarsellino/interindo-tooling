const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pdf = require('html-pdf');

const pdfTemplate = require('../containers/pages/PDF-Templates');

const app = express();


const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

//POST PDF Generation - fetcing all the data
app.post('/create-pdf', (req, res) => {
    pdfTemplate.create(pdfTemplate(req.data), {}).toFile('result.pdf', (err) => {
        if(err) {
            return Promise.reject();
        }
        else {
            return Promise.resolve();
        }
    });
});

//Generate PDF to client
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})