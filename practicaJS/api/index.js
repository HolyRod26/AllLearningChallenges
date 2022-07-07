const express = require('express');
const app = express();

const async = require('async'); 

app.get('/upcoming', (request, response) => {
    response.json({'itworks': 'yes'});
})
app.listen('8010', () => console.log('Listening en port 8010'));