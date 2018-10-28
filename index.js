const express = require('express');

const app = express();

app.get('/dog', (res, req) => {
  const dog = 'shiba';
  res.json({ dog });
});

app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
    console.log(`Server listening on port ${app.get('port')}...`);
});
