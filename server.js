const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let fruits = [
    {
        id: 1,
        name: 'orange'
    }, {
        id: 2,
        name: 'apple'
    }
];

app.get('/', function (req, res) {
    res.send('Hello API');
});

app.get('/fruits', function (req, res) {
    res.send(fruits);
});

app.get('/fruits/:id', function (req, res) {
    const fruit = fruits.find(function (fruits){
        return fruits.id === Number(req.params.id);
    });
    res.send(fruit);
});

app.post('/fruits', function (req, res){
    console.log(req.body);
});

app.listen(3012, function () {
    console.log('API app started');
})
