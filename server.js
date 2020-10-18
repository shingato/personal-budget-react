const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const budget = {
    myBudget:[
    {
        title: 'Eat out',
        budget: 25
    },
    {
        title: 'Rent',
        budget: 375
    },
    {
        title: 'Grocery',
        budget: 110
    },
    {
        title: 'Internet',
        budget: 30
    },
    {
        title: 'Phone',
        budget: 50
    },
    {
        title: 'Electricity',
        budget: 170
    },
    {
        title: 'Gas',
        budget: 80
    }
]
};


app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log('Example app listening at https://localhost:3001')
});