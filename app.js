const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = require('./modals/index');

db.mongoose.connect(
    "mongodb+srv://vivekcodeship:anWwninbMzMiGnwa@firstbackend.c3h20zv.mongodb.net/?retryWrites=true&w=majority"
)
    .then((res) => {
        console.log('connected to database');
    })
    .catch((err) => {
        console.log(err);
        process.exit();
    })



app.get('/', (req, res) => {
    res.send('hello');
});




 app.use('/users',require('./routes/users'));

 
const personal = require('./routes/personalRoute');
app.use('/personal', personal);

const port = 3000;
app.listen(port, () => {
    console.log('listening on http://localhost:' + port);
})